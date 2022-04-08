const express = require('express');

const router = express.Router()

const mongoose = require('mongoose');
const User = mongoose.model("User")

router.get('/',(req,res)=>{
	res.send("hello")
})

router.post('/signup',(req,res)=>{
	const {name,email,password} = req.body
	if (!email || !password || !name) {
		res.json({error:"Field Empty"})
	}
	// else {
	// 	res.json({message:"Success"})
	// }
	User.findOne({email:email})
	.then((savedUser)=> {
		if (savedUser) {
			return res.status(422).json({error:"Email Already Exist"})
		}
		const user = new User({
			email,password,name
		})
		user.save()
		.then(user => {
			res.json({message:"saved Success"})
		})
		.catch(err => {
			console.log(err)
		})
	})
	.catch(err => {
			console.log(err)
		})
})

module.exports = router