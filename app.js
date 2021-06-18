const express = require('express');
const app = express();
const port = 3032;
const path = require('path');

app.use(express.static('public'));

app.get('/',(req,res) => res.sendfile(path.join(__dirname,'views','home.html')));
app.get('/contact',(req,res) => res.sendFile(path.join(__dirname,'views','contact.html')))
app.get('/about',(req,res) => res.sendFile(path.join(__dirname,'views','about.html')));
app.get('/babbage',(req,res)=> res.sendFile(path.join(__dirname,'views','babbage.html')));
app.get('/berners-lee', (req,res)=>res.sendFile(path.join(__dirname,'views','berners-lee.html')))
app.get('/clarke', (req,res)=>res.sendFile(path.join(__dirname,'views','clarke.html')))
app.get('/hamilton', (req,res)=>res.sendFile(path.join(__dirname,'views','hamilton.html')))
app.get('/hopper', (req,res)=>res.sendFile(path.join(__dirname,'views','hopper.html')))
app.get('/lovelace', (req,res)=>res.sendFile(path.join(__dirname,'views','lovelace.html')))
app.get('/turing', (req,res)=>res.sendFile(path.join(__dirname,'views','turing.html')))



app.listen(port,() => console.log('servidor corriendo en http://localhost:' + port))