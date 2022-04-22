const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Look mama I can write node code')
}
);

const users = [
    { id: 1, name: 'sabana', email: 'sabana@gmail.com', phone: '0165434333' },
    { id: 2, name: 'nabana', email: 'mabana@gmail.com', phone: '0165434334' },
    { id: 3, name: 'pabana', email: 'pabana@gmail.com', phone: '0165434335' },
    { id: 4, name: 'kabana', email: 'kabana@gmail.com', phone: '0165434336' },
    { id: 5, name: 'jabana', email: 'jabana@gmail.com', phone: '0165434337' },
    { id: 6, name: 'habana', email: 'habana@gmail.com', phone: '0165434338' },
    { id: 7, name: 'nabana', email: 'nabana@gmail.com', phone: '0165434330' }
]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else {
        res.send(users)
    }

})

app.get('/user/:id', (req, res) => {
    console.log(req.params)
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
});

app.post('/user', (req, res) => {
    console.log('request', req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges'])
})

app.listen(port, () => {
    console.log('listening to port', port);

})