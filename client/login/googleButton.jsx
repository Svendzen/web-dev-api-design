import { LoginContext } from "../context/loginContext";
import { useContext, useEffect, useState } from "react";

const DISCOVERY_URL =
  "https://accounts.google.com/.well-known/openid-configuration";

export function GoogleButton({ userType }) {
  const [authorizationUrl, setAuthorizationUrl] = useState();
  const { client_id } = useContext(LoginContext);
  async function loadAuthorizationUrl() {
    const res = await fetch(DISCOVERY_URL);
    const discoveryDocument = await res.json();
    setAuthorizationUrl(
      discoveryDocument.authorization_endpoint +
        "?" +
        new URLSearchParams({
          response_type: "token",
          scope: "email profile",
          client_id,
          redirect_uri: window.location.origin + "/login/callback/google",
        }),
    );
  }
  useEffect(() => {
    loadAuthorizationUrl();
  }, []);

  const initiateLogin = () => {
    sessionStorage.setItem("userType", userType); // Temporarily store userType until login happens
  };

  return (
    <>
      <div className={"google-button"} onClick={initiateLogin}>
        <a href={authorizationUrl}>Sign in with Google</a>
      </div>
    </>
  );
}
