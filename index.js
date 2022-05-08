const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());

app.get('/', (req, res) => {
    res.send('Look mama! I can write node')
});

const users = [
    { id: 1, name: 'abdul alim', job: 'khai shudhu halim' },
    { id: 2, name: 'abdul halim', job: 'khai shudhu halim' },
    { id: 3, name: 'abdul jobbar', job: 'khai shudhu halim' },
    { id: 4, name: 'abdul kuddus', job: 'khai shudhu halim' },
    { id: 5, name: 'abdul baten', job: 'khai shudhu halim' },
    { id: 6, name: 'abdul hasan', job: 'khai shudhu halim' },
    { id: 7, name: 'abdul mofiz', job: 'khai shudhu halim' }
];

app.get('/users', (req, res) => {
    res.send(users)
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
});

app.post('/user', (req, res) => {
    console.log(req)
    res.send('post method success')
});

app.listen(port, () => {
    console.log('Listening to port', port)
});