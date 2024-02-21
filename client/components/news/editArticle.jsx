import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LoginContext } from "../context/loginContext";
import { ARTICLE_CATEGORIES } from "../../constants/categories"; // Assuming you've defined your categories here

export function EditArticle() {
  const [article, setArticle] = useState({
    title: "",
    category: "",
    text: "",
    image: "", // optional
  });
  const { id } = useParams(); // Get the article ID from the URL
  const navigate = useNavigate();
  const { user } = useContext(LoginContext);

  useEffect(() => {
    // Function to fetch the article data
    const fetchArticle = async () => {
      try {
        const response = await fetch(`/api/article/${id}`);
        if (!response.ok) throw new Error("Failed to fetch article");
        const data = await response.json();
        setArticle({
          title: data.title,
          category: data.category,
          content: data.content,
          image: data.image || "",
        });
      } catch (error) {
        console.error("Error loading article:", error.message);
      }
    };

    fetchArticle();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Update the article
    try {
      const response = await fetch(`/api/article/${id}`, {
        method: "PUT", // Note the method here is PUT to update
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...article, author: user?.name }), // Assuming you want to keep the same author
      });

      if (!response.ok) throw new Error("Failed to update article");

      alert("Article updated successfully");
      navigate(`/article/${id}`); // Redirect to the updated article page
    } catch (error) {
      console.error("Error updating article:", error.message);
    }
  };

  return (
    <form className="article-form" onSubmit={handleSubmit}>
      <h2>Edit Article</h2>
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
      <button type="submit">Update Article</button>
    </form>
  );
}
