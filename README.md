# Express.js Blog Application

This project is aimed at creating a server application using Node.js and Express framework. The main objectives of this project include creating a RESTful API, utilizing Express middleware, rendering views using a template engine, and interacting with a self-made API through HTML forms.

# Getting Started
To get started with this project, follow the steps below:

## Installation

1. Install dependencies:
  - npm install
  - npm init -y
  - npm --save-dev

2. Create a MongoDB Atlas cluster and replace `dbURI` in `app.js` with your connection string.

3. Run the application:
  - npm start

4. Open your web browser and navigate to `http://localhost:3000` to view the application.

## Features

- View list of blogs
- View individual blog posts
- Add new blog posts
- Delete blog posts

## Project Structure

- `app.js`: Entry point of the application where Express.js app is configured.
- `routes/blogRoutes.js`: Contains routes for handling CRUD operations related to blog posts.
- `views/`: Contains EJS templates for rendering HTML pages.
- `styles/`: Contains CSS files for styling.
- `models/`: Contains MongoDB schema models.

## Dependencies

- `express`: Web framework for Node.js.
- `morgan`: HTTP request logger middleware.
- `mongoose`: MongoDB object modeling tool.
- `ejs`: Templating engine for rendering HTML.

## Usage

- The homepage (`/`) redirects to the list of blog posts.
- `/blogs`: Displays a list of blog posts.
- `/blogs/:id`: Displays an individual blog post.
- `/about`: About page of the application.


## Objectives

1. Create a RESTful API using Express
This project implements a RESTful API using Express. The API allows clients to perform CRUD operations on resources such as users, products, or any other relevant entities.

2. Create Express middleware
Express middleware functions are used to perform tasks such as logging, authentication, error handling, etc. This project demonstrates the creation and usage of Express middleware to enhance the functionality of the server.

3. Use a template engine to render views with Express
The server renders dynamic HTML views using a template engine such as EJS or Handlebars. These views may include data fetched from the server or interactions with the RESTful API.

4. Interact with a self-made API through HTML forms
HTML forms are utilized to interact with the self-made API. Users can submit data through forms, which is then processed by the server and persisted in the database via the RESTful API endpoints.

## Technologies Used

Node.js
Express.js
CSS
JavaScript
