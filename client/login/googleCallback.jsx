import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/loginContext";

export function GoogleCallback() {
  const { loadUser, setUserType } = useContext(LoginContext);
  const navigate = useNavigate();

  async function handleCallback() {
    try {
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

      // retrieve userType only on successful login
      const userType = sessionStorage.getItem("userType");
      setUserType(userType);
      sessionStorage.removeItem("userType"); // clean up temp storage

      navigate("/profile"); // go to profile page after successful login
    } catch (error) {
      console.log("An error occured: " + error);
    }
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
