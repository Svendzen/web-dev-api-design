export function Header() {
  return (
    <header>
      <h1>The Developer Daily</h1>
      <p>Because Coffee and Code Aren't Enough!</p>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="/joke">Joke of the Day</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li className="login">
            <a href="/login">Sign in</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
