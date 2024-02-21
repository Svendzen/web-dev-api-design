import express from "express";
import { fetchUserInfo } from "../middleware/userInfoMiddleware.js";

const loginRouter = (db) => {
  const router = express.Router();

  const google_config = process.env.GOOGLE_OPENID_CONFIGURATION;

  router.get("/login", (req, res) => {
    // Check if user information is available in the request from userInfoMiddleware
    if (req.user) {
      res.send(req.user);
    } else {
      // User is not logged in
      res.status(401).json({ message: "Not authenticated" });
    }
  });

  router.post("/login/google", async (req, res) => {
    const { access_token } = req.body; // gets this from client

    try {
      const user = await fetchUserInfo(google_config, access_token);
      res.cookie("access_token", access_token, { signed: true }); // set access_token cookie
      const loginEvent = {
        email: user.email,
        provider: "Google",
        loginAt: new Date(),
      };
      // log the login in db
      await db.collection("loginEvents").insertOne(loginEvent);
      res
        .status(201)
        .json({ message: "User successfully logged in", user: user });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  });

  router.delete("/logout", (req, res) => {
    res.clearCookie("access_token");
    res.sendStatus(204);
  });

  return router;
};
export default loginRouter;
