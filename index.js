const express = require('express');
const app = express();  // create an application to set up our server
const path = require('path');
const Webscraper = require('./webscrape');
const webscraper = new Webscraper();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
    res.render("page");
});

app.use(express.json());

app.post("/scrape", async function (req, res) {
    const url = req.body.URL; // take object from request body
    try {
        const dictionary = await webscraper.scrape(url);
        res.json(dictionary);
    } catch (error) {
        console.error(error);
    }
});

app.use('webscrape.js', express.static(__dirname, {index: 'webscrape.js'}));

app.use(express.json());

app.listen(3000);  // makes our server run and listens on port 3000 for requests