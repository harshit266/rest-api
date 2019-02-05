const express=require('express');
const router=express.Router();
const Ninza=require('../models/ninzas');

router.get('/ninzas',function(req,res,next){
	 Ninza.aggregate().near({
   near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
   maxDistance: 1000,
   spherical: true,
   distanceField: "dis"
  })﻿.then(function(ninzas){
			res.send(ninzas);
		});
});

router.post('/ninzas',function(req,res,next){
	
	Ninza.create(req.body).then(function(ninza){
	res.send(ninza);
	}).catch(next);

});

router.put('/ninzas/:id',function(req,res,next){
	Ninza.findByIdAndUpdate({_id:req.params.id}	,req.body).then(function(){
		Ninza.findOne({_id:req.params.id}).then(function(ninza){
			res.send(ninza);
		});
	});
});

router.delete('/ninzas/:id',function(req,res,next){
	Ninza.findByIdAndRemove({_id:req.params.id}).then(function(ninza){
		res.send(ninza);
	}); 
	
});

module.exports=router;