const axios = require("axios");  // intermediary library between clients and servers
const cheerio = require("cheerio");  // inpect tool, webscraping library

module.exports = class Webscraper {
  constructor() {
    this.map = new Map();  // every object of webscraper class will have a map attribute
  }

  // main function adds and sorts the html values into your map function
  async scrape(userInput) {  
    let response = await axios.get(userInput);
    let page = response.data;
    let $ = cheerio.load(page, {
      xml: {
        normalizeWhitespace: true,
      },
    });
  
    $("*").each(function () {
      if ((this.map.get($(this).text)) === undefined) {
        let c = 1;
        this.map.set(($(this).text), c);
      } else {
        let c = this.map.get($(this).text) + 1;
        this.map.set(($(this).text), c);
      }
    });

    return this.map;
  }

  // getKeys() {
  //   let keys = [...this.map.keys()];
  //   return keys;
  // }

  // getValues() {
  //   let values = [...this.map.values()];
  //   return values;
  // }
}