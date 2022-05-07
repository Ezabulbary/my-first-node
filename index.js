const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Look mama! we can write npm.')
})

const users = [
    { id: 1, name: 'abdul alim', job: 'khai shudhu halim' },
    { id: 2, name: 'abdul halim', job: 'khai shudhu halim' },
    { id: 3, name: 'abdul jobbar', job: 'khai shudhu halim' },
    { id: 4, name: 'abdul kuddus', job: 'khai shudhu halim' },
    { id: 5, name: 'abdul baten', job: 'khai shudhu halim' },
    { id: 6, name: 'abdul hasan', job: 'khai shudhu halim' },
    { id: 7, name: 'abdul mofiz', job: 'khai shudhu halim' }
]

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
})

app.listen(port, () => {
    console.log('Listening to port', port)
})