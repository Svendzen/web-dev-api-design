import { useState } from "react";

export function Article() {
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [timePublished, setTimePublished] = useState();
  const [category, setCategory] = useState();
  const [author, setAuthor] = useState();

  async function loadArticle() {}

  return (
    <article>
      <h2>The 5 most common mistakes as React developer</h2>
      {image && <img src={image} alt="Article visual" />}
      <ul className={"article-info"}>
        <li>
          <p>
            <strong>Published on:</strong>
          </p>
          <p>February 19th 2024</p>
        </li>
        <li>
          <p>
            <strong>Article category:</strong>
          </p>
          <p>React</p>
        </li>
        <li>
          <p>
            <strong>Written by:</strong>
          </p>
          <p>Linus</p>
        </li>
      </ul>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet
        assumenda deleniti dolor dolores doloribus ducimus illo in inventore
        ipsam ipsum iure laboriosam, molestias natus numquam odio, omnis quasi
        quisquam reiciendis similique, suscipit tempore voluptas. Adipisci
        dolores incidunt maiores rerum?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eveniet
        quis saepe tenetur unde, ut voluptatibus! Aliquam consequuntur
        dignissimos hic omnis quia soluta sunt veniam? Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Aliquid animi aperiam culpa
        dignissimos distinctio, ducimus illo, in, libero modi nobis obcaecati
        optio quos sed tempore!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        aspernatur debitis ea facilis fuga ipsa nihil nisi obcaecati, quisquam
        saepe! Aperiam beatae delectus doloremque, ea eius eos excepturi illum
        impedit minus modi nulla omnis quam quia quos sunt tempora, voluptas
        voluptatum. A adipisci animi assumenda eius eum, expedita facere id iure
        mollitia non pariatur perferendis quae quas, quos repellat sequi
        voluptatibus! A alias commodi eligendi error incidunt inventore,
        mollitia officia officiis qui repellendus sunt, tempora.
      </p>
    </article>
  );
}
