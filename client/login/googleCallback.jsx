import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/loginContext";

export function GoogleCallback() {
  const { loadUser } = useContext(LoginContext);
  const navigate = useNavigate();

  async function handleCallback() {
    // gets the access token from destructuring hashObject in url
    const { access_token } = Object.fromEntries(
      new URLSearchParams(window.location.hash.substring(1)),
    );
    const res = await fetch("/api/login/google", {
      method: "POST",
      body: JSON.stringify({ access_token }),
      headers: {
        "content-type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(
        "Error with access token POST request. " + res.statusText,
      );
    }
    await loadUser();
    navigate("/profile");
  }
  useEffect(() => {
    handleCallback();
  }, []);

  return (
    <>
      <div>
        <h3>Signing in - please wait...</h3>
      </div>
    </>
  );
}
