const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
require('colors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let users = [
    {
        id: 1,
        username: 'Khayala'
    },
    {
        id: 2,
        username: 'Khayal'
    },
    {
        id: 3,
        username: 'Khay'
    },
]

app.get('/', (req, res) => {
    res.json(users);
})

app.delete('/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter((item) => item.id != id);
    res.json('User deleted successfully!')
})

app.post('/', (req, res) => {
    const userBody = req.body;
    users.push(userBody);
    res.send('User added successfully!');
})

app.put('/:id', (req, res) => {
    const { id } = req.params;
    const { username } = req.body;

    const index = users.findIndex(user => user.id == id);

    if (index !== -1) {
        users[index].username = username;
        res.json('Data updated successfully!');
    } else {
        res.json('User not found!');
    }
});



const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server is running: http://localhost:${PORT}`.blue.bold));