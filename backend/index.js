console.log("hello world")
const express=require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app=express();

app.get('/produse',(req,res) =>{
    res.status(200).send({produs: "Lapte", pret: 5.5});
})
app.listen(5000, () => {
    console.log('Server started on port 5000');
})
