const express = require("express");
const bodyParser = require('body-parser');
const app = express();

/*app.get('/saludo', function(req, res) {
    res.send(`Hola ${ req.query.name }`);
});
*/

app.use( bodyParser.urlencoded({extended:true}) );

app.post('/', function(req, res){
    res.send(`Hola ${ req.body.name }`);
});

app.listen(3000);
