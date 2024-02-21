# pg6301-2024-konte-Svendzen

HEROKU LINK: https://news-article-app-195a9a90a730.herokuapp.com/

"npm run dev" to start the app locally.

All code is written by me but some code is inspired by the references mentioned. 
That code have been changed so it fits my needs and vision for application
# Features:
* 3 types of users - anonymous, readers, editors
* anonymous users are not signed in and can not read articles
* reader users can read articles
* editor users can publish, edit and delete their own articles
* profile page for logged in users
* user stays logged in (signed cookies)
* news articles with title, text are required and picture is optional
* Add article page for editors - with select, input & textarea
* error handling
* MongoDB & Heroku
* CSS Grid - Holy Grail layout with horizontal nav menu
* Navigate with nav bar
# Known issues:
Web sockets not working.

No tests.

The "Articles" element in the nav has no purpose. 
It was supposed to have drop down menu, and you could display articles by category.
Didn't have time for it, lower priority. Should not take long time to add since every thing else is ready.

Profile page is missing css styling.

Error msg might pop up after successfully deleting an article - error message is lying, because the deletion worked.

Only 1 way to log in - Google

Users are not stored in db - lacking way to store their information other than what provided from Google.
I could set userType in db, add stuff like bio, phone number etc. to profile.

Editor users trying to edit/remove their article is only authenticated through name. Goes back to user in db thing. 
Should be an unique ID of some sort, even email wouldve been better, but my article collection doesnt store that as of yet.

# References:
"pg6301-frontend-programming Github Repository" https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming

"Build Layouts with CSS Grid #3 - Holy Grail Layout" https://www.youtube.com/watch?v=cJvMbQq0MIQ

"CSS Horizontal Navigation Bar" https://www.w3schools.com/css/css_navbar_horizontal.asp

Royalty free stock photos used are from https://www.pexels.com/