const axios = require("axios");  // intermediary library between clients and servers
const cheerio = require("cheerio");  // inpect tool, webscraping library

module.exports = class Webscraper {
  constructor() {
    this.map = new Map();  // every object of webscraper class will have a map attribute
  }

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
      if ($(this).text != undefined) {
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
  
    // $("*").each(function () {
    //   if ((map.get($(this).text())) === undefined) {
    //     let c = 1;
    //     map.set(($(this).text()), c);
    //   } else {
    //     let c = map.get($(this).text()) + 1;
    //     map.set(($(this).text()), c);
    //   }
    // });
    // sort by value
    const mapSort1 = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    for(let i = 0; i < 5; i++) {
      console.log(mapSort1.get(i));
    }
    // console.log([...map.keys()]);
    
    this.map = map;
    return map;
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