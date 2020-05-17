# Emaily
App for sending emails to customers and asking them for feedback about webpage.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Features](#features)
* [Try out](#try-out)
* [How to use](#how-to-use)
* [Sources](#sources)

## General info

This is full-stack app  based on MERN stack.

## Technologies
For front-end
* React
* Redux

For back-end
* NodeJS with Express
* React
* Redux
* MongoDB with mongoose

## Features
* Authorization with Google OAuth
* Payments with Stripe 
* Emails with SendGrid
* Cloud database in MongoDB Atlas

## Try out
App online on heroku
https://calm-waters-56067.herokuapp.com/

## How to use
* To use app, you need to Login with Google.
![Logged In](./img/loggedIn.png)

* To create survey you need credits. Payments are in testing version. Use 4242 4242 4242 4242 card number, valid email, expiration date and any CVV number.
![Credits](./img/card.png)

* Create new survey by pressing + button. Email adresses of your clients, must be separated by commas.
![New survey](./img/CreateSurvey.png)

* Confirm survey data and send it.
![Confirm](./img/confirmSurvey.png)

* Your clients will get emails like this
![Email](./img/email.png)

* After receiving feedback from your clients, you will get report.
![Feedback](./img/feedback.png)

## Sources
This app is based on JavaScript Tutorial by Jonas Schmedtmann on Udemy.  
https://www.udemy.com/course/the-complete-javascript-course/
