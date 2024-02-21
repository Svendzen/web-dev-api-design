import React from "react";

export function AboutPage() {
  return (
    <div className="about-page">
      <h1>About The Developer Daily</h1>
      <p>
        Welcome to <strong>The Developer Daily</strong> - your go-to source for
        completely fabricated, slightly believable, and occasionally funny
        developer news. Where facts are optional, and the code snippets are as
        reliable as a chocolate teapot.
      </p>

      <h2>Our Mission</h2>
      <p>
        To provide the developer community with the most current,
        groundbreaking, and utterly made-up news in the tech world. From the
        latest trends in coffee-driven development to the newest frameworks that
        exist only in parallel universes, we've got you covered.
      </p>

      <h2>Meet the Team</h2>
      <ul className={"team-info"}>
        <li>
          <strong>John Doe</strong>: Our lead editor, who once fixed a bug by
          simply glaring at his screen. Known for his ability to write code that
          even he can't understand two weeks later.
        </li>
        <li>
          <strong>Jane Smith</strong>: Senior fake news correspondent.
          Specializes in AI, VR, and making up acronyms that sound important but
          mean absolutely nothing.
        </li>
        <li>
          <strong>Byte McBitface</strong>: Our mascot and occasional bug
          generator. Believes strongly that if code compiles, it's good enough.
        </li>
      </ul>

      <h2>Behind the Scenes</h2>
      <p>
        The Developer Daily was created during a hackathon that took a wrong
        turn. What started as an attempt to revolutionize the way developers
        consume news ended up as a repository of the most entertaining, if not
        particularly useful, tech-related humor on the web.
      </p>

      <h2>Disclaimer</h2>
      <p>
        Please note that any resemblance to actual events, locales, or persons
        (living, dead, or stuck in a debugging session) in our articles is
        purely coincidental. Except for Byte McBitface. He's real.
      </p>
    </div>
  );
}
