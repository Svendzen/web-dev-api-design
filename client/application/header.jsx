import { LoginContext } from "../context/loginContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const { user, userType } = useContext(LoginContext);
  return (
    <header>
      <h1>The Developer Daily</h1>
      <p>Because Coffee and Code Aren't Enough!</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="">Articles</Link>
          </li>
          <li>
            <Link to="/joke">Joke of the Day</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {userType === "editor" ? (
            <li>
              <Link to={"article/new"}>Add New Article</Link>
            </li>
          ) : null}
          <li className="login">
            {user ? (
              <Link to={"/profile"}>{user.name}</Link>
            ) : (
              <Link to="/login">Sign in</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
