# pg6301 - Web Development & API Design - Exam

## Overview

As part of an exam for the "Web Development and API Design" course, I developed an online news application using React for the frontend, Express for the backend, and MongoDB for data storage. The app was deployed on Heroku (though it is no longer hosted). It featured three user roles: anonymous users (who could only view headlines), readers (signed-in users who could read full articles), and editors (users with the ability to add and edit news articles). The theme of the news site focused on content relevant to developers.

To start the app locally, run:

```bash
npm run dev
```

You can log in as either a reader or editor from the login page. Once logged in, editor-specific options will be available in the navigation bar and on their articles.

While all code was written by me, some parts were inspired by the references listed below. These sections have been adapted to fit my specific requirements and vision for the application.

## Features

- **User Roles:**
    - Anonymous users can only view headlines.
    - Readers can view full articles once signed in.
    - Editors can create, edit, and delete their own articles.
- **Profile Page:** Each logged-in user has a profile page.
- **Persistent Login:** Users stay logged in using signed cookies.
- **Article Management:** Articles have a title and content (required), with an optional image upload.
- **Add Article Page:** Editors have access to an interface with input fields, text areas, and select options for creating articles.
- **Error Handling:** Basic error handling for user interactions.
- **Technologies Used:** MongoDB for data storage, deployed on Heroku (no longer live).
- **Layout and Navigation:**
    - CSS Grid implementing the Holy Grail layout.
    - Horizontal navigation bar for easy access across the app.

## Known Issues

- **Web Sockets:** Currently not working.
- **Testing:** No tests were implemented.
- **Article Navigation:** The "Articles" tab in the nav bar has no functionality. It was intended to display articles by category, but this feature was deprioritized.
- **Profile Page Styling:** Missing CSS styling for the profile page.
- **Error on Deletion:** After successfully deleting an article, an error message might still appear, although the deletion was successful.
- **Google Authentication:** Google is the only available method for logging in.
- **User Storage:** User data is not fully stored in the database (Google provides basic information). Further fields like bio, phone number, and user type could be added.
- **Article Ownership:** Editors are authenticated by name when editing or deleting articles. A unique identifier (such as email or ID) should be used instead.

## References

- [pg6301-frontend-programming Github Repository](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming)
- ["Build Layouts with CSS Grid #3 - Holy Grail Layout" on YouTube](https://www.youtube.com/watch?v=cJvMbQq0MIQ)
- ["CSS Horizontal Navigation Bar" by W3Schools](https://www.w3schools.com/css/css_navbar_horizontal.asp)
- [Stock Photos from Pexels](https://www.pexels.com/)
