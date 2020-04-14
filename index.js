const express = require('express');
const app = express();
const PORT = 4713;

app.get('/', (req, res) => {
    res.send("Hello");
});

app.get('/', (req, res) => {
    res.send("Welcome to our web app!")
});

app.get('/test', (req, res) => {
    console.log(`Anything`)
    res.send("Bye")
});

app.get('/login', (req, res) => {
    console.log(`You are at login page.`)
    res.send("Login")
});

app.get('/register', (req, res) => {
    console.log(`You are at register page.`)
    res.send("Register")
});

app.get('/writeMessage', (req, res) => {
    console.log(`You are at writeMessage page.`)
    res.send("Write Message")
});

app.get('/readMessage', (req, res) => {
    console.log(`You are at readMessage page.`)
    res.send("Read Message")
});


app.listen(PORT, 
    () => console.log(`App is listenting on PORT: ${PORT}`)
);
//console.log(`Something else`)