const express = require('express');
const path = require('path');

// const {search, getTodo} = require('../db');


const PUBLIC = path.resolve(__dirname, '..', 'public');
const app = express();
const PORT = 3000;

app.use(express.static(PUBLIC))

app.get('/hello', (req, res)=>{
  res.send({greeting: 'hello world!!'});
})


app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`);
})
