const express = require('express')
const app = express()  // create an application to set up our server
const webscrape = require("./webscrape.js");


app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // res.download("index.js")
    res.render("page")
    // res.status(500).json({ message: 'Error'})  // displays on client server; web browser
})

app.use(express.static("views"));

app.listen(3000)  // makes our server run and listens on port 3000 for requests
