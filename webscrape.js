const axios = require("axios");  // intermediary library between clients and servers
const cheerio = require("cheerio");  // inpect tool, webscraping library

class Webscraper {
  constructor() {
    this.map = Map();
  }

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
  
    for (const [key, value] of this.map.entries()) {
      let arr1 = [...Array(this.map.size()).keys()];
      let arr2 = [...Array(this.map.size()).keys()];
      arr1.push(key);
      arr2.push(value);
    }
  }
}

function getInput() {
    const userInput = document.getElementById("user_input").value;
    let word = main();
}

const sentInput = document.getElementById("send1");
sentInput.addEventListener("click", getInput)
