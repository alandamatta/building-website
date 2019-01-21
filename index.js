var express = require('express');
var app = express();


//teste

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) =>{
    res.render('home');
});

app.get('*', (req, res) =>{
    res.send('any page');
});

app.listen(8080);
