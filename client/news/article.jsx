import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { LoginContext } from "../context/loginContext"; // Used to sanitize the article content to prevent XSS attacks

function formatPublishedDate(isoDateString) {
  const date = new Date(isoDateString);
  const optionsDate = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  return date.toLocaleDateString("en-US", optionsDate);
}

export function Article() {
  const [article, setArticle] = useState(null);
  const { user, userType } = useContext(LoginContext);
  let { id } = useParams(); // fetches id from the url params

  async function loadArticle() {
    try {
      const res = await fetch(`/api/article/${id}`);
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const articleData = await res.json();
      articleData.timePublished = formatPublishedDate(
        articleData.timePublished,
      ); // format to a more readable format
      setArticle(articleData);
    } catch (error) {
      console.error("Failed to load the article:", error);
      setArticle(null);
    }
  }

  const handleEdit = (articleId) => {
    // Redirect to edit article page, passing the article ID
    navigate(`/edit-article/${articleId}`);
  };

  const handleDelete = async (articleId) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      try {
        const res = await fetch(`/api/article/${articleId}`, {
          method: "DELETE",
        });
        if (!res.ok) {
          throw new Error(`Error: ${res.statusText}`);
        }
        alert("Article deleted successfully.");
        navigate("/"); // Redirect to home or articles list after deletion
      } catch (error) {
        console.error("Failed to delete the article:", error);
        alert("Error deleting article. Please try again.");
      }
    }
  };

  useEffect(() => {
    loadArticle();
  }, [id]);

  return (
    <article>
      {article ? (
        <>
          <h2>{article.title}</h2>
          {user && userType === "editor" && user.name === article.author && (
            <div>
              <button onClick={() => handleEdit(article._id)}>Edit</button>
              <button onClick={() => handleDelete(article._id)}>Delete</button>
            </div>
          )}
          {user ? (
            <>
              {article.image && <img src={article.image} alt="Article image" />}
              <ul className={"article-info"}>
                <li>
                  <p>
                    <strong>Published on:</strong> {article.timePublished}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Article category:</strong> {article.category}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Written by:</strong> {article.author}
                  </p>
                </li>
              </ul>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(article.content),
                }}
              />
            </>
          ) : (
            <p className="access-denied-message">
              You need to be signed in to view this article.
            </p>
          )}
        </>
      ) : (
        <p>Loading article...</p>
      )}
    </article>
  );
}
