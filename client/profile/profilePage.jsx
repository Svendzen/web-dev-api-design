import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/loginContext";

export function ProfilePage() {
  const { user, setUser, loadUser } = useContext(LoginContext);
  const navigate = useNavigate();

  async function handleLogout(e) {
    e.preventDefault();
    const res = await fetch("/api/logout", {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("Error! Could not log out! " + res.statusText);
    }
    setUser(null); // call this so the page (nav) updates correctly
    navigate("/");
  }

  if (user)
    return (
      <>
        <h2>{user.name}'s Profile</h2>
        <div>Email: {user.email}</div>
        <div>First Name: {user.given_name}</div>
        <div>Last Name: {user.family_name}</div>
        <img src={user.picture} alt="user's picture" />

        <form onSubmit={handleLogout}>
          <button>Log out</button>
        </form>
      </>
    );
}
