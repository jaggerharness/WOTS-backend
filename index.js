const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send("Hello");
});

app.get('/', (req, res) => {
    res.send("Welcome to our web app!")
});

app.get('/test', (req, res) => {
    console.log(`Something`)
    res.send("Hi")
});

app.listen(PORT, 
    () => console.log(`App is listenting on PORT: ${PORT}`)
);
console.log(`Something else`)