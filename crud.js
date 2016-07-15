const express = require('express');
const app = express();
const bodyParser=require('body-Parser');
const MongoClient = require('mongodb').MongoClient;
const port=3000;
let db
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
	console.log('wellcome crud with express mongodb!');
  res.sendFile(__dirname+'/crud.html');
});

app.post('/add', (req, res) => {
  console.log(req.body);
});

app.get('/list', (req, res) => {
  db.collection('employee').find().toArray(function(err, results) {
  console.log(results)
});
});


MongoClient.connect('mongodb://localhost:27017/kCRM', (err, database) => {
  if (err) return console.log(err)
 
  db= database;

  app.listen(port,  (req,res)=> {
  console.log('env = '+ app.get('env') +
    '\n__dirname = ' + __dirname  +
    '\nprocess.cwd = ' + process.cwd() );
console.log('\nListening on port '+ port);
});

});





