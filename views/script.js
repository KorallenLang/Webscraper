let button2 = document.getElementById("send2");
function onClick() {
    let tbody = document.getElementById("tbody1");
    let numberOfWord = document.getElementById("options");
    let userChoice = numberOfWord.options[numberOfWord.selectedIndex].text;
    for(let i = 0; i < userChoice; i++) {
        const newTableRow = document.createElement("tr");
        const keyRow = document.createElement("td");
        const valRow = document.createElement("td");
        tbody.appendChild(newTableRow);
        newTableRow.appendChild(keyRow);
        newTableRow.appendChild(valRow);
    }
}

button2.addEventListener('click', onClick);

let button1 = document.getElementById("send1");

async function onClick() {
    let tds = document.querySelectorAll('#table1 td');
    let td = Array.from(tds);
    let urlInput = document.getElementById("user_input").value;
    document.getElementById('user_input').value = '';
    const response = await axios.post("/scrape", {URL: urlInput});
    let obj1 = response.data;
    for(let i = 0; i < td.length; i++) {
        if (i % 2 == 0) {
            td[i].innerHTML = obj1.words[i];
        } else {
            td[i].innerHTML = obj1.frequencies[i];
        }
    }
}

button1.addEventListener('click', onClick);