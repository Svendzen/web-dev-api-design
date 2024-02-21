import { GoogleButton } from "./googleButton";

export function LoginPage() {
  return (
    <>
      <h1>Log In or Sign Up</h1>
      <p>Select a Login Provider:</p>
      <div>
        <h2>For Readers</h2>
        <GoogleButton userType="reader" />
      </div>
      <div>
        <h2>For Editors</h2>
        <GoogleButton userType="editor" />
      </div>
    </>
  );
}
