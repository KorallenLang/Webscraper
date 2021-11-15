import * as axios from './node_modules/axios';
const yourUrlVariable = "https://theDesiredLink.com";
let tds = document.querySelectorAll('#table1 td');
let td = Array.from(tds);
for(let i = 0; i < td.length; i++) {
    if (i % 2 == 0) {
        td[i].innerHTML = "y";
    } else {
        td[i].innerHTML = "n";
    }
}

let urlInput = document.getElementById("user_input").value;

const response = await axios.post("/", {URL: urlInput});
console.log(response.data);