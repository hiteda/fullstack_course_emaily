# Emaily
This project was created for the [Node with React: Fullstack Web Development](https://www.udemy.com/course/node-with-react-fullstack-web-development/) course on Udemy.

The application is a web app using React, Express, and MongoDB, as well as the Stripe, OAuth2, and SendGrid APIs. Users can log in using their Google account, buy credits with their credit card, and create simple surveys to be emailed to a list of recipients. The recipients' responses are collected and displayed in a dashboard that can be viewed by the user.

You can see my heroku deployment of this application [here](https://fathomless-badlands-61520.herokuapp.com/).

## Requirements
To run this application, you need a [SendGrid](https://sendgrid.com/) account with API keys, an account with a MongoDB server or a local MongoDB server, Google OAuth client keys, and a [Stripe](https://stripe.com/) account with API keys.

Copy the contents of `config/prod.js` to a new file in the `config` directory called `dev.js`, and replace all the values in the object with your values. `redirectDomain` should be `"http://localhost:3000"`, and `cookieKey` should be a random string.

## Running the app
In the project directory, add your API keys to dev.js and run:

`npm install`

to install the necessary packages, then run:

`npm run dev`

To test the Add Credits feature, click the Add Credits button, enter any properly formatted information in the fields, and `4242 4242 4242 4242` in the Card Number field.

## Technologies Used
<img src="https://img.shields.io/static/v1?label=&message=MongoDB&style=for-the-badge&logo=MongoDB&logoColor=white&color=47A248" /> <img src="https://img.shields.io/static/v1?label=&message=Express&style=for-the-badge&logo=Express&logoColor=white&color=black" /> <img src="https://img.shields.io/static/v1?label=&message=React&style=for-the-badge&logo=React&logoColor=black&color=61DAFB" /> <img src="https://img.shields.io/static/v1?label=&message=Node.js&style=for-the-badge&logo=Node.js&logoColor=white&color=339933" />
<img src="https://img.shields.io/static/v1?label=&message=Redux&style=for-the-badge&logo=Redux&logoColor=white&color=764ABC" /> <img src="https://img.shields.io/static/v1?label=&message=Stripe&style=for-the-badge&logo=Stripe&logoColor=white&color=008CDD" />