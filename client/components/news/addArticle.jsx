import React, { useState, useContext } from "react";
import { LoginContext } from "../context/loginContext";
import { ARTICLE_CATEGORIES } from "../../constants/categories"; // constant wirth article categories

export function AddArticle() {
  const { user } = useContext(LoginContext);
  const [article, setArticle] = useState({
    title: "",
    category: "",
    content: "",
    image: "", // optional image URL
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs (image is optional)
    if (!article.title || !article.category || !article.content) {
      alert("Title, category, and text are required.");
      return;
    }

    const articleToSubmit = {
      ...article,
      author: user?.name || "Anonymous", // Set author to user's name or default to 'Anonymous'
      timePublished: new Date().toISOString(),
    };

    // API call to post the article
    try {
      const response = await fetch("/api/article", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(articleToSubmit),
      });

      if (!response.ok) {
        throw new Error("Failed to post the article.");
      }

      // Success feedback
      alert("Article added successfully!");
      setArticle({ title: "", category: "", content: "", image: "" }); // Reset form
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="article-form">
      <h2>Add New Article</h2>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={article.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={article.category}
          onChange={handleChange}
        >
          <option value="">Select a category</option>
          {ARTICLE_CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="content">Article Text</label>
        <textarea
          id="content"
          name="content"
          value={article.content}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="image">Image URL (optional)</label>
        <input
          type="text"
          id="image"
          name="image"
          value={article.image}
          onChange={handleChange}
          placeholder="http://example.com/image.jpg"
        />
      </div>
      <button type="submit">Post Article</button>
    </form>
  );
}
