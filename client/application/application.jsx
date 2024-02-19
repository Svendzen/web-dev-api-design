export function Application() {
  return (
    <>
      <div className="grid-container">
        <header>
          <h1>The Developer Daily</h1>
          <p>Because Coffee and Code Aren't Enough!</p>
        </header>
        <nav>
          <p>Categories</p>
          <li>Home</li>
          <li>Sign in</li>
          <li>Preferences</li>
        </nav>
        <article>
          <h2>The 5 most common mistakes as React developer</h2>
          <p>[Image here?]</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet
            assumenda deleniti dolor dolores doloribus ducimus illo in inventore
            ipsam ipsum iure laboriosam, molestias natus numquam odio, omnis
            quasi quisquam reiciendis similique, suscipit tempore voluptas.
            Adipisci dolores incidunt maiores rerum?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            eveniet quis saepe tenetur unde, ut voluptatibus! Aliquam
            consequuntur dignissimos hic omnis quia soluta sunt veniam?
          </p>
        </article>
        <aside>
          <ul>
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
        </aside>
        <footer>
          <p>Copyright 2024 The Developer Daily</p>
          <p>
            <i>Parody - not a real news site!</i>
          </p>
        </footer>
      </div>
    </>
  );
}
