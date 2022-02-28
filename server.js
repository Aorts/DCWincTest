const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());
let pingCount = 0;
let obj = 0
app.get('/ping',(req, res) => {
  res.send(`total ${pingCount}`);
});

app.post('/', function(request, response){
   response.send(request.body);    // echo the result back
   obj = request.body.inc;
   pingCount = pingCount + obj;

});

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})