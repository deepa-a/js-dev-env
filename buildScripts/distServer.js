import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3001;
const app = express();

app.use(compression());
app.use(express.static('dist'));


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res){
  res.json([
    {"id":1, "firstName": "Bob", "lastName":"Smith","email":"bob@bob.com"},
    {"id":2, "firstName": "Bobby", "lastName":"Jain","email":"bob@gmail.com"},
    {"id":3, "firstName": "Jack", "lastName":"Stller","email":"bob@hotmail.com"},
  ]);
});

app.listen(port, function(err) {
  if(err){
    console.log(err); // eslint-disable-line no-console
  }
  else{
    open('http://localhost:'+port);
  }
});
