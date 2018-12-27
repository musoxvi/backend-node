const express = require('express');
const app = express();

app.use('/assets', express.static('assets'));

app.set('view engine', 'ejs');


app.get('/', function(req, res){
   //res.sendFile('index.html',{
   //    root: __dirname
   //});
   //res.send(__dirname);
   res.render('index')


});


app.listen(8081);
