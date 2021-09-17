const express = require('express');
const path = require('path');

const {search, getTodo} = require('../db');


const PUBLIC = path.resolve(__dirname, '..', 'public');
const app = express();
const PORT = 3000;

app.use(express.static(PUBLIC))

app.get('/api/todo/:id', (req, res)=> {
  getTodo(req.params.id, (err, data)=> {
    if(err) {
      res.status(500).send(err);
    } else {
      res.send(data.rows[0])
    }
  })
})

app.get('/api/search/:term', (req, res)=> {
  const term = req.params.term;
  // console.log(term)
  search(`${term}`, (err,data)=>{
    if(err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`);
})
