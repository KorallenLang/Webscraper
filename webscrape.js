const axios = require("axios");  // intermediary library between clients and servers
const cheerio = require("cheerio");  // inpect tool, webscraping library

module.exports = class Webscraper {
  constructor() {
    this.map = new Map();  // every object of webscraper class will have a map attribute
  }

  // main function adds and sorts the html values into your map function
  async main() {  
    let response = await axios.get(userInput);
    let page = response.data;  // don't have to type in html
    let $ = cheerio.load(page, {
      xml: {
        normalizeWhitespace: true,
      },
    });
  
    $("*").each(function () {  // what does non text containing elements return when .text() is called
      if ((this.map.get($(this).text)) === undefined) {
        let c = 1;
        this.map.set(($(this).text), c);
      } else {
        let c = this.map.get($(this).text);
        this.map.set(($(this).text), c);
      }
    });
  }

  getKeys() {
    let keys = [...this.map.keys()];
    return keys;
  }

  getValues() {
    let values = [...this.map.values()];
    return values;
  }
}