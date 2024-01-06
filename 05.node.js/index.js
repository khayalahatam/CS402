const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());

let users =[
    {
        id:'1',
        name:'Khayala'
    },
    {
        id:'2',
        name:'Khayal'
    }

]

app.get('/',(req,res)=>{
   res.json(users);
});

app.delete('/:id',(req,res)=>{
    const{ id }=req.params
    users=users.filter((item)=>item.id != id)
    res.json('User deleted successfully!')
})

app.post('/',(req,res)=>{
    const userBody = req.body
    users.push(userBody)
    res.send('User added successfully!')
})

const PORT = process.env.PORT;

app.listen(PORT,() => console.log(`Server is running: http://localhost:${PORT}`));

