import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { LoginContext } from "../context/loginContext"; // Used to sanitize the article content to prevent XSS attacks

export function Article() {
  const [article, setArticle] = useState(null);
  const { user } = useContext(LoginContext);
  let { id } = useParams(); // fetches id from the url params

  async function loadArticle() {
    try {
      const res = await fetch(`/api/article/${id}`);
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const articleData = await res.json();
      console.log(articleData);
      setArticle(articleData);
    } catch (error) {
      console.error("Failed to load the article:", error);
      setArticle(null);
    }
  }

  useEffect(() => {
    loadArticle();
  }, [id]);

  return (
    <article>
      {article ? (
        <>
          <h2>{article.title}</h2>
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
