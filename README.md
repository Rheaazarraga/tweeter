# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end
skills, and their Node, Express and MongoDB back-end skills.

## Purpose
---
This project by [Rhea Azarraga](https://github.com/Rheaazarraga) is created as part of the [Lighthouse Labs](https://github.com/lighthouse-labs) curriculum. It is not intended for professional use.

## Final Result 
---
<p align="center">
    
<img width="1250" src="https://user-images.githubusercontent.com/84409001/134787898-a56d1389-7911-47aa-bc4a-24cf33554f80.png" />
    <br />
     <br />
    
<img width="1250" src="https://user-images.githubusercontent.com/84409001/134787899-b42413d6-f63d-442a-9e80-94037558f79f.png" />
 <br />
  <br />
    
<img width="1250" src="https://user-images.githubusercontent.com/84409001/134787904-369f778f-c936-4a43-90fa-c4be869efd32.png" />
<br />
 <br />

<img width="900" src="https://user-images.githubusercontent.com/84409001/134787910-0878afcc-9498-49c8-984a-83d9277788f6.png" />
<br />
 <br />

<img width="900" src="https://user-images.githubusercontent.com/84409001/134787913-4f929cb2-adfa-48e5-aa21-ccda3f7ed24f.png" />



## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express ^4.13.4
- Node ^5.10.x
- Body-Parser ^1.15.2
- Chance ^1.0.2
- md5 ^2.1.0

## Dev Dependencies

- Nodemon ^1.9.2
- morgan ^1.10.0

## Directories
---

**[Public](https://github.com/Rheaazarraga/tweeter/tree/master/public)** 
- Contains files made publicly accessible in the application.
- Includes the assets folder, containing images/videos and other media used in the app.

- [Scripts](https://github.com/Rheaazarraga/tweeter/tree/master/public/scripts)
    - Contains all JavaScript files used in the project.
- [Styles](https://github.com/Rheaazarraga/tweeter/tree/master/public/styles)
    - Contains all CSS files used in the project.
- [Vendor](https://github.com/Rheaazarraga/tweeter/tree/master/public/vendor)
    - Stores specific third party code.  

**[Server](https://github.com/Rheaazarraga/tweeter/tree/master/server)**

- Contains all server-side logic in the application.

## File Descriptions
---
#### [index.html](https://github.com/Rheaazarraga/tweeter/blob/master/public/index.html)
- Contains all of the HTML markup for the application. All external stylesheets and scripts are linked in the head tag.

#### [client.js](https://github.com/Rheaazarraga/tweeter/blob/master/public/scripts/client.js)
- Contains all of the client-side logic for the application.

- loadTweets: Is used to submit a GET request to the /tweets/ route to retrieve an array of posted tweets. This function also empties/ resets the form and hides the loader, since it is called every time a post request completes.

- createTweetElement: This renders the HTML markup for a new tweet. The function dynamically inserts user input into the markup using template literals.

- renderTweets: A function that accepts an array of objects containing the tweeter user's data. It loops through the array and prepends each array item (a posted tweet) to the DOM container which holds them.

- escape: Is responsible for escaping cross site scripting aka potentially malicious input characters, which could either alter or destroy the application's code base.

- errorHandler: A function which checks for input field errors, such as an empty field, or a field which contains over 140 characters. It identifies whether an error is present or not in the input field, and will notify the user with the appropriate error message.

- scrollFunction: Triggers when the user reaches or scrolls past 20px within the page's body and prompts a button to appear. 

- topFunction: Triggers when the user clicks on the arrow up/ back to top button, and scrolls the browser back up to the tweet form. It includes functionality for users using Safari, Google Chrome, FireFox, and Opera browsers.


#### [composer-char-counter.js](https://github.com/Rheaazarraga/tweeter/blob/master/public/scripts/composer-char-counter.js)
- This file is in charge of dynamically updating the counter as a tweet is written. The file listens for the user's input with the input event and decrements/ increments to the counter. It also modifies CSS classes based on the input's state.
