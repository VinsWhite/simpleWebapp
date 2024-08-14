# simpleWebapp

## Description
This project is a simple web application that calculates the sum of two user-supplied numbers, adding a random number. It includes an interactive frontend and a backend for computation.
It has a Node.js server.

## Index
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Author](#author)

## Installation
To set up this project locally:

1. Clone the repository -> `git clone ...`
2. Open the project folder in a code editor, such as Visual Studio Code


## Usage
To use this project locally:

1. Open client with: 
    - Live Server (Visual Studio Code extension)
               [OR]
    - Open Directly in Browser
2. In the server folder install the required packages: `npm install`
3. To start the development server, run `npm start`. If you prefer to use `NODEMON` for automatic restarts in development mode, use `npm run start:dev`
4. While using the app, make sure the server remains running


## Project Structure
This section provides an overview of the project's structure:

- **/client**: Contains the frontend code: HTML, CSS, and JavaScript files. 
This is where you’ll find the user interface and client-side logic.
    - **assets**: This folder contains: 
        **style/styles.css**: The CSS file that provides styling for the frontend.
        **script/script.js**: The JavaScript file that handles user interactions and communicates with the backend.
        **img**: The images folder.
    - **index.html**: The main HTML file that defines the structure of the user interface.

- **/server**: Contains the backend code, including server logic and APIs.
  - **app.js**: The main app file that sets up the Node.js server and handles incoming requests.

- **package.json**: The configuration file for npm, listing project dependencies and scripts.

- **README.md**: This file, which provides an overview of the project, installation instructions, and usage guidelines.


## Author
Vincenzo Saccone