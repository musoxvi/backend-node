const  express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser'); //leer los campos que vienen en el cuerpo de la peticion

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

let db = new sqlite3.Database('proyecto-backend');

//definiendo ruta

app.post('', function(req, res){
    db.run('INSER INTO tasks(description) VALUES("olakease")');
    res.send('insercion finalizada');
});

db.close();

app.listen(3000);

process.on('SIGINT',function(){
    console.log('Adios - Atte. El Servidor');
    db.close();
    process.exit();
})