const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/prem',(req,res)=>{
    res.send('Hi Prem');
});

app.listen(3000,()=>{
    console.log('Express web application on locoalhost:3000');
});