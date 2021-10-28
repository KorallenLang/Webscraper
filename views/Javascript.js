const axios = require("axios");  // intermediary library between clients and servers
const cheerio = require("cheerio");  // inpect tool, webscraping library

async function main() {
  const map = Map();

  let response = await axios.get(userInput);
  let page = response.data;  // don't have to type in html
  let $ = cheerio.load(page, {
    xml: {
      normalizeWhitespace: true,
    },
  });
  $("*").each(function () {
    if ((map.get($(this).text)) === undefined) {
      let c = 1;
      map.set(($(this).text), c);
    } else {
      let c = map.get($(this).text);
      map.set(($(this).text), c);
    }
  });

  for (const [key, value] of map.entries()) {
    console.log(key, value);
  }
}

function getInput() {
    const userInput = document.getElementById("user_input").value;
    let word = main();
}

function setInput(word) {
  const par = document.getElementById("paragraph");
  par.innerHTML = word;
}

const sentInput = document.getElementById("send1");
sentInput.addEventListener("click", getInput)
