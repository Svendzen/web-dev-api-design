import express from "express";
import * as path from "path";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const PORT = 3001;

app.use(express.json()); // instead of body parser
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.static("../client/dist")); // better performance middleware

// MONGO DB CONNECTION
const client = new MongoClient(process.env.MONGODB_URL);
const db = client.db("news_db"); // the db being used

// FALLBACK MIDDLEWARE for non API GET calls
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

let server; // variable for websockets to use

// Only run Express server if MongoDB connection is secured
await client
  .connect()
  .then((client) => {
    server = app.listen(process.env.PORT || PORT, () => {
      console.log("Successfully connected to MongoDB!");
      console.log("Server running on port " + PORT);
    });
  })
  .catch((error) => {
    console.log("Failed to connect to MongoDB. ", error);
  });
