const express = require('express');
const app = express();  // create an application to set up our server
const path = require('path');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
    res.render("page");
});

app.use(express.json());

app.post("/", function (req, res) {
    const url = req.body.URL; // take object from request body
    const dictionary = webscraper.scrapeUrl(url);
    res.json(dictionary);
});

app.use('webscrape.js', express.static(__dirname, {index: 'webscrape.js'}));

app.use(express.json());

app.listen(3000);  // makes our server run and listens on port 3000 for requests