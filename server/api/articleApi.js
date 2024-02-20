import express from "express";
import { ObjectId } from "mongodb";

const articlesRouter = (db) => {
  const router = express.Router();

  // GET route for fetching article previews (title, image, and id)
  router.get("/articles", async (req, res) => {
    try {
      const collection = db.collection("articles");
      const articles = await collection
        .find({}, { projection: { title: 1, image: 1 } }) // include only title and image
        .sort({ timePublished: -1 }) // returns newest articles first
        .toArray();
      res.json(articles);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  // POST route for adding a new article
  router.post("/article", async (req, res) => {
    try {
      const collection = db.collection("articles");
      const article = await collection.insertOne(req.body);
      res.status(201).json(article);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  // GET route for fetching a specific article by ID
  router.get("/article/:id", async (req, res) => {
    try {
      const collection = db.collection("articles");
      const article = await collection.findOne({
        _id: new ObjectId(req.params.id),
      });
      if (!article) {
        return res
          .status(404)
          .send("The article with the given ID was not found.");
      }
      res.json(article);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  return router;
};

export default articlesRouter;
