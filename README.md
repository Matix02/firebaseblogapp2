# Blog - Progressive Web Application
A web application built as a progressive web application. It was one of two applications for the practical part of the Master's program. This is a blog for creating new posts and conveniently reading them.

Additionally, this application includes two forms. First, editors can publish with a title, description, local image (this is sent to Firebase-Storage Cloud and to the Firebase database as a link). The forms are only available for the progressive web app - it is not possible to submit an article from the Kotlin twin app (still open to readers). Editors must register before starting with information such as full name, email address, password, country, zip code (optional), etc. This section is based on Firebase email authentication. Including password reset via direct email link or forgotten password reminder.

The second version is intended for users to read the posts. This version really has the function of a progressive web app as the user can install the app like a native app. Both versions received a contact form to email the admin about errors in the layout and even in the articles.

Link: https://tsblogapp.web.app/

Technology:
- HTML5/CSS
- JavaScript
- Bootstrap 4
- Progressive Web Application
- Firebase Database/Hosting/Storage/Authentication
