import { useEffect, useState } from "react";
import { ArticlePreview } from "./articlePreview";

export function NewsPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    loadArticles();
  }, []);

  async function loadArticles() {
    try {
      const response = await fetch("/api/articles");
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error("Failed to load articles:", error);
    }
  }

  function handleArticleClick(id) {
    // Here you would navigate to the Article component or update state to show the Article component.
    // This example will just log the ID to the console.
    console.log("Article ID clicked:", id);
  }

  return (
    <div className="news-page">
      <h1>Our Latest Articles</h1>
      {articles.map((article) => (
        <ArticlePreview
          key={article._id}
          id={article._id}
          title={article.title}
          image={article.image}
          onClick={handleArticleClick}
        />
      ))}
    </div>
  );
}
