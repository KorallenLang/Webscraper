const axios = require("axios");  // intermediary library between clients and servers
const cheerio = require("cheerio");  // inpect tool, webscraping library

async function main() {
  let totalImg = 0;
  let imgAlt = 0;

  let response = await axios.get(userInput);
  let page = response.data;  // don't have to type in html
  let $ = cheerio.load(page, {
    xml: {
      normalizeWhitespace: true,
    },
  });

}

function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}

function getInput() {
    const userInput = document.getElementById("user_input").value;
}

const sentInput = document.getElementById("send1");
sentInput.addEventListener("click", getInput)
main();
