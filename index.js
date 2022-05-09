const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Look mama! I can write node')
});

const users = [
    { id: 1, name: 'abdul alim', email: 'alim@gmail.com' },
    { id: 2, name: 'abdul halim', email: 'halim@gmail.com' },
    { id: 3, name: 'abdul jobbar', email: 'jobbar@gmail.com' },
    { id: 4, name: 'abdul kuddus', email: 'kuddus@gmail.com' },
    { id: 5, name: 'abdul baten', email: 'baten@gmail.com' },
    { id: 6, name: 'abdul hasan', email: 'hasan@gmail.com' },
    { id: 7, name: 'abdul mofiz', email: 'mofiz@gmail.com' }
];

app.get('/users', (req, res) => {
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else{
        res.send(users)
    }
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
});

app.post('/user', (req, res) => {
    console.log('request', req.body )
    const user = req.body;
    user.id = users.length + 1;
    console.log(user);
    users.push(user);
    res.send(user);
});

app.listen(port, () => {
    console.log('Listening to port', port)
});