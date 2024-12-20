/*
Title: Basic Node app example
Description: Simple node application that print random quotes per second interval.
Author: Rafi SharKar
Date: 24/11/24
*/

// Dependencies
const mathLibrary = require('../node_modules/lib')
const quotesLibrary = require('../node_modules/lib')

// App object - Module scaffolding
const app = {}

// Configuration
app.config = {
    timeBetweenQuotes: 1000,
}

// Function that print a random quote
app.printAQuote = function printAQuote(){
    // Get all the quotes
    const allQuotes = quotesLibrary.allQuotes();

    // Get the lenght of the quotes
    const numberOfQuotes = allQuotes.lenght

    // Pick a random number between 1 and the number of quotes
    const randomNumber = mathLibrary.getRandomNumber(1, numberOfQuotes)

    // Get the quote at that position in the array (minus one)
    const selectedQuote = allQuotes[randomNumber - 1]

    // Print the quote to the console
    console.log(selectedQuote)
};

// Function that loop indefinitely, calling the printAQuote function as it goes
app.indefiniteLoop = function indefiniteLoop(){
    // Create the interval, using the config variable defined above
    setInterval(app.printAQuote, app.config.timeBetweenQuotes)
}

// Invoke the loop
app.indefiniteLoop();

