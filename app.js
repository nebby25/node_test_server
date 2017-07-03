const express = require('express');
const fs = require('fs');
const quoteGetter = require('./quoteGetter');
const hbs = require('hbs');
const fsSaver = require('./logSaver.js');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('date', ()=>{
    return new Date().getFullYear();
});

            

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next)=>{
    var now = new Date().toString();
    var log = `${now} ${req.method} ${req.url}`;
//    console.log(req);
//    console.log(res);
        fsSaver.fsSaver(req.method + ' ' + req.url).then((message)=>{
            console.log(message);
        }, (error)=>{
            console.log(error);
        });
            next(); 
        });
   

var quotes = quoteGetter.quoteGetter('http://ron-swanson-quotes.herokuapp.com/quotes');



app.get('/', (req, res)=>{
   res.render('home.hbs',{
       welcome: 'Welcome Home',
       name: 'Benjamin Taylor'       
   }); 
});

app.get('/quotes',(req, res)=>{
   res.send(quotes); 
});

app.get('/about', (req, res)=>{
   res.render('about.hbs',{
       welcome: 'All about this site',
       name: 'Benjamin Taylor',
       copy: '&copy'
   }); 
});



app.listen(3000, ()=>{
    console.log('server listening on port 3000');
           });