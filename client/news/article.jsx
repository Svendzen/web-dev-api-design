import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser"; // parse html to react components - more safely display html elements

export function Article() {
  const [article, setArticle] = useState(null);
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
          {article.image && <img src={article.image} alt="Article image" />}
          <ul className={"article-info"}>
            <li>
              <p>
                <strong>Published on:</strong>
              </p>
              <p>{article.timePublished}</p>
            </li>
            <li>
              <p>
                <strong>Article category:</strong>
              </p>
              <p>{article.category}</p>
            </li>
            <li>
              <p>
                <strong>Written by:</strong>
              </p>
              <p>{article.author}</p>
            </li>
          </ul>
          <div>{parse(article.content)}</div>
        </>
      ) : (
        <p>Loading article...</p>
      )}
    </article>
  );
}
