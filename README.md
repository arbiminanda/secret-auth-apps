# Secrets: Fullstack Express Authentication Apps

This is fullstack express project to implement general and google authentication

# Run Script

- Open terminal/cmd, go to the project directory and install all dependencies

```
npm install
```

- Setup MongoDB server on your device, you can use [this](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/) as reference
- Create a database with name "secret_auth_apps", create a collection with name "users"
- This project use [Passport Google Authentication](https://www.passportjs.org/packages/passport-google-oauth20/) for google auth mechanism, for this purpose you should setup google console API for authentication:

1. Add project in [Google Console API](https://console.cloud.google.com/apis/dashboard)
2. Setup OAuth Consent Screen
3. Create OAuth clientID in credentials section, you should set type to web application, input base url of your apps, and set url for google authorization callback

```
{baseUrl}/auth/google/secrets
```

4. You will get clientId and clientSecret

- Copy file .env.example to .env, and edit the content of that file:

```
BASE_URL: Base url of your apps
SECRET_KEY: random string for encryption in general authentication purpose
CLIENT_ID: clientId from Google Console API
CLIENT_SECRET: clientSecret from Google Console API
```

- Run this command to run the server:

```
nodemon server.js
```
