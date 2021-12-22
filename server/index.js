const express = require('express');
const path = require('path');
const axios = require('axios');


// const {search, getTodo} = require('../db');


const PUBLIC = path.resolve(__dirname, '..', 'public');
const app = express();
const PORT = 3000;

app.use(express.static(PUBLIC))

app.get('/todos', (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/todos')
  .then(({ data }) => {
      res.send(data);
  })
})

app.get('/hello', (req, res)=>{
  res.send({greeting: 'hello world!!'});
})


app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`);
})
