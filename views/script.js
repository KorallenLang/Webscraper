let tds = document.querySelectorAll('#table1 td');
let td = Array.from(tds);
for(let i = 0; i < td.length; i++) {
    if (i % 2 == 0) {
        td[i].innerHTML = "y";
    } else {
        td[i].innerHTML = "n";
    }
}