# Express.js Quote API

This is a small Express.js web API that stores and serves different quotes about computers, coding, and technology. The API allows you to retrieve random quotes, filter quotes by author, and add new quotes to the dataset.

## Installation

To use this API, you'll need to have Node.js installed on your computer. You can download and install Node.js from the official website: <https://nodejs.org/en/>

Once you have Node.js installed, you can clone this repository and navigate to the project directory in your terminal:

`git clone https://github.com/TomoFromEarth/quote-api.git; cd quote-api
`

Next, install the required dependencies using npm

`npm install`

## Usage

To start the API server, run the following command in your terminal:

`node server.js`

This will start the server on port 4001 by default. You can access the API endpoints by sending HTTP requests to the server using a tool like Postman or a web browser.

### GET /api/quotes

The `GET /api/quotes` endpoint returns an array of all quotes in the dataset, or an array of quotes by a specific author if a `person` query parameter is provided.

### Example requests:

#### Retrieve all quotes:

`GET http://localhost:4001/api/quotes`

#### Retrieve quotes by author:

`GET http://localhost:4001/api/quotes?person=Grace Hopper`

### GET /api/quotes/random

The `GET /api/quotes/random` endpoint returns a single random quote from the dataset.

#### Example request:

`GET http://localhost:4001/api/quotes/random`

### POST /api/quotes

The `POST /api/quotes` endpoint allows you to add a new quote to the dataset. The request must include `quote` and `person` query parameters with the text of the quote and the name of the person who said it, respectively.

#### Example request:

`POST http://localhost:4001/api/quotes?quote=It always seems impossible until it's done.&person=Nelson Mandela`

## License

This project is licensed under the MIT license. See the LICENSE file for more information.

## Acknowledgements

This project was created as part of the Codecademy Pro Back-End Engineer career path. Special thanks to Codecademy for providing the project specifications and starter code.
