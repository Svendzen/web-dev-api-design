import { Header } from "./header";
import { Footer } from "./footer";
import { ApplicationRoutes } from "./applicationRoutes";
import { LoginContext } from "../context/loginContext";
import { useEffect, useState } from "react";

const GOOGLE_CLIENT_ID =
  "1081825772749-4t841k64hh499c4ni9dmvakjcmtu7uvu.apps.googleusercontent.com";

export function Application() {
  const [user, setUser] = useState();
  async function loadUser() {
    try {
      const res = await fetch("/api/login");
      const contentType = res.headers.get("Content-Type") || "";

      // Check if the response's Content-Type is application/json
      if (!contentType.includes("application/json")) {
        throw new TypeError("Expected JSON, got " + contentType);
      }
      if (!res.ok) {
        throw new Error("Could not fetch user, " + res.statusText);
      }
      // check if content length is 0
      const contentLength = res.headers.get("Content-Length");
      if (contentLength === "0") {
        console.error("Empty response from the server");
      }
      const user = await res.json();
      // Check if user is loaded
      if (user && Object.keys(user).length !== 0) {
        setUser(user); // Only call setUser if user is actually loaded and not an empty object
      }
    } catch (error) {
      console.log(error);
    }
  }
  // load the user on render
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <LoginContext.Provider
      value={{ user, setUser, loadUser, client_id: GOOGLE_CLIENT_ID }}
    >
      <div className={"grid-container"}>
        <Header />
        <aside className={"left"}></aside>
        <main>
          <ApplicationRoutes />
        </main>
        <aside className={"right"}></aside>
        <Footer />
      </div>
    </LoginContext.Provider>
  );
}
