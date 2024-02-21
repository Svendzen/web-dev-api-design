import { useEffect, useState } from "react";
import { ArticlePreview } from "./articlePreview";
import { useNavigate } from "react-router-dom";

export function NewsPage() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadArticles();

    // connect to websocket server
    const wsProtocol =
      window.location.protocol === "https:" ? "wss://" : "ws://";
    const webSocket = new WebSocket(wsProtocol + window.location.host);
    webSocket.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    webSocket.onmessage = (event) => {
      const newArticle = JSON.parse(event.data);
      setArticles((prevArticles) => [newArticle, ...prevArticles]);
    };

    webSocket.onclose = () => {
      console.log("Disconnected from WebSocket server");
    };

    return () => webSocket.close(); // close websocket connection
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
    navigate(`/article/${id}`);
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
