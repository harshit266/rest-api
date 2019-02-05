const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

const app=express();

mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise=global.Promise;
app.use(bodyParser.json());

const routes=require('./routes/api');
app.use('/api',routes);

//error handling for name required 
app.use(function(err,req,res,next){
	res.status(422).send({error:err.message});
});

app.listen(process.env.port||3000,function(){
	console.log("file is connected to port 3000");
});