# express-server-deployment

HTTP Express Server deployed on Heroku.

Deployment URL: https://express-server-deployment.herokuapp.com/

![Data Flow](/UML.png)

## Installation

to install run `git clone git@github.com:JacobKnaack/express-server-deployment.git`

`cd` into express-server-deployment

run `npm install`

## Usage

To start server run : `npm start`

To test server run: `npm test`

## Routes

* GET `/message`: returns a list of Message objects
* POST `/message`: creates a message, saves it and returns the list of messages.

## Features

* Message:
  * Contains String: Text
  * Contains String: Author
  * Messages can be saves
  * Full list of messages read.
