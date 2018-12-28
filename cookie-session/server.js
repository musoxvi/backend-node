const express = require('express');
const cokieSession = require('cookie-session');

const app = express();

app.use(cokieSession({
    name: 'session',
    keys: ['holajsjsjs', 'joojojojhsjhhj']
}));

app.get('/', function(req, res){
    req.session.visits =  req.session.visits || 0;
    req.session.visits =  req.session.visits +1;
    res.send(`${req.session.visits} visita(s)`)
})
app.listen(3005);