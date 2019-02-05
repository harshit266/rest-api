const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//create a schema for geo directions
const GeoSchema=new Schema({
	type:{
		type:String,
		default:"Point"
	},
	coordinates:{
		type:[Number],
		index:"2dsphere"
	}
})

const NinzaSchema = new Schema({
name:{
	type:String,
	required:[true,'name field is required']
},
rank:{
	type:String
},
available:{
	type:Boolean,
	default:false
},
geometry:GeoSchema
});

const Ninza=mongoose.model('ninza',NinzaSchema);
module.exports=Ninza;

