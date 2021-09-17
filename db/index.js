const {Client} = require('pg');


const config = {
  user: 'robertlopez',
  database: 'text',
  password: '',
}

const client = new Client(config);

const getTodo = (id, callback) => {
  client.query(`Select * from todo where id=${id}`, callback)
}

const search = (search, callback) => {
  client.query(`Select * from todo where text_vector @@ to_tsquery('${search}')`, (err, data)=>{
    if (err) {
      callback(err)
    } else {
      callback(null, data.rows)
    }
  } )
}

client.connect((err)=>{
  if (err) {
    console.log('bad connection')
  } else {
    console.log('connected')
    // search('estonia',(err, data)=> {
    //   console.log(err, data.rows);
    // })
  }
})

module.exports.search = search;
module.exports.getTodo = getTodo;
