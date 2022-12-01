# express-server-deployment

HTTP Express Server deployed on Heroku.

Deployment URL: https://express-server-deployment.herokuapp.com/

![Data Flow](/UML.png)

## Installation

Install via git:

* http: `git clone https://github.com/JacobKnaack/express-server-deployment.git`
* ssh: `git clone git@github.com:JacobKnaack/express-server-deployment.git`

`cd` into express-server-deployment

run `npm install`

## Usage

To start server run : `npm start`

To test server run: `npm test`

## Features

### REST API

#### Message

* Model
  * text: String
  * author: String

### Route

* Method: `GET`
* Path: `/message`
* response:
  * type: `application/json`
  * body: `[Message.Model]`

* Method: `POST`
* path: `/message`
* queryParams:
  * text: `?text=String`
  * author: `?author=String`
* response:
  * type: `application/json`
  * body: `Message.Model`
