const axios = require("axios");  // intermediary library between clients and servers
const cheerio = require("cheerio");  // inpect tool, webscraping library

module.exports = class Webscraper {
  // main function adds and sorts the html values into your map function
  async scrape(userInput) {
    const map = new Map();  
    let response = await axios.get(userInput);
    let page = response.data;
    let $ = cheerio.load(page, {
      xml: {
        normalizeWhitespace: true,
      },
    });

    $("*").each(function () {
      if ($(this).text() != undefined) {
        let arr = ($(this).text()).split(" ");
        for(let i = 0; i < arr.length; i++) {
          if ((map.get(arr[i])) === undefined) {
            let c = 1;
            map.set((arr[i]), c);
          } else {
            let c = map.get(arr[i]) + 1;
            map.set((arr[i]), c);
          }
        }
      }
    });
  
    const mapSort1 = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    let keyArr = [...mapSort1.keys()];
    let valArr = [...mapSort1.values()];

    
    return { words: keyArr, frequencies: valArr};
  }
}