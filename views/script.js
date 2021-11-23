let tds = document.querySelectorAll('#table1 td');
let td = Array.from(tds);
let button = document.getElementById("send1");
async function onClick() {
    let urlInput = document.getElementById("user_input").value;
    const response = await axios.post("/scrape", {URL: urlInput});
    let obj1 = response.data;
    for(let i = 0; i < td.length; i++) {
        if (i % 2 == 0) {
            td[i].innerHTML = obj1.words[i];
        } else {
            td[i].innerHTML = obj1.frequencies[i];
        }
    }
    urlInput = "";
}

button.addEventListener('click', onClick);