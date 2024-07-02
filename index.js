const express = require ('express');
const jokes =require('./data');

const app = express();

const PORT  = 8080;

app.get('/jokes',(req ,res)=>{
    const requireRandomJokesIndex = Math.floor(Math.random()*jokes.length);
    return res.status(200).json(jokes[requireRandomJokesIndex]);
})

app.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}`);
});