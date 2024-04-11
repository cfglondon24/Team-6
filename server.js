const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static('public/css'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/landing-page.html');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
