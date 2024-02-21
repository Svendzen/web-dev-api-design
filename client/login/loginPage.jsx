import { GoogleButton } from "./googleButton";

export function LoginPage() {
  return (
    <div className={"login-page"}>
      <h1>Log In or Sign Up</h1>
      <p>Become part of The Developer Daily community!</p>
      <p>Select a Login Provider</p>
      <p>
        <i>(more providers coming soon! Probably...)</i>
      </p>
      <div>
        <h2>For Readers</h2>
        <GoogleButton userType="reader" />
      </div>
      <div>
        <h2>For Editors</h2>
        <GoogleButton userType="editor" />
      </div>
    </div>
  );
}
