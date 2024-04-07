# Amiibo Atlas

Welcome to Amiibo Atlas.

This project is a React web app, which integrates with the Amiibo API (Nintendo figurines), as well as incorporating various other libraries to develop a robust web application for Amiibo collectors and enthusiasts.

Utilizing the Amiibo API, this application would provide users with detailed information on Amiibo figures, including character backgrounds, game compatibility, release dates, usage, etc. I'd like to use Redux Toolkit for global state management, such that the app offers a seamless user experience, enabling users to track their Amiibos, add Amiibos to their Wishlist's, and discover new Amiibo figures, etc. Ideally, it would be nice to add authentication such that Redux Toolkit can save their collections to their accounts (perhaps, using Google account/third party logic, and google cloud platform for authentication/reCAPTCHA support).

## Libraries and tools

Amiibo Atlas is set to utilize various modern web technologies.

- TypeScript as the core programming language
- React.js for the frontend framework
- Redux Toolkit for handling global state management
- React Router for handling navigation, parameterized pages
- PostgreSQL for relational database management
- Emotion Library (CSS in JavaScript)
- Amiibo RESTful API integration
- Google Cloud Platform (hosting, reCAPTCHA support)
- Authentication library (to be determined)

## Features (user engagement)

- Authentication, Register/Login ; login with Google (and possibly various others such as Twitter, GitHub)
- Ability to rate/comment/review Amiibo's
- Store Amiibo to wishlist
- Search for particular Amiibo based on figure series association
- Visual data based on Amiibo data

# Designed for mobile-first, desktop-second

Amiibo Atlas will adopt a mobile-first design approach, desktop-second approach, adapting user experience based on the users device. The responsive design ensures that Amiibo Atlas will respond to various screen resolutions, enhancing usability across devices.

## Stretch Goals / Wishlist

- Day/Night theme (powered by ThemeProvider built into the Emotion library)
- Deploy webs app to Netlify, Heroku, Google Cloud Platform, etc.
