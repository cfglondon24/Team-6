// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    // Your JavaScript code here to handle clicks, form submissions, etc.
  });
  const url = 'http://localhost:4000/'

function testGet(endpoint) {
    fetch(url + endpoint)
    .then(response => response.json())  
    .then(json => {
        console.log(json);
    });
}

function testPost(endpoint) {
    fetch(url + endpoint, {
        method: "POST",
        body: JSON.stringify({
            head: "headache, fever",
            chest: "coughs",
        })}).then((response) => response.json())
        .then((json) => console.log(json));;
}

testPost("symptoms");
testGet("symptoms");