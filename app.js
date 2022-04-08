const express = require('express');
const app = express()
const mongoose = require('mongoose');
const PORT = 5000
// const {MONGOURI} = require('./keys');


mongoose.connect("mongodb+srv://freecodecamp:KxWg8NKgLLsxcSxd@cluster0.y6cov.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
	useNewUrlParser:true,
	useUnifiedTopology:true
})
mongoose.connection.on('connected',() => {
	console.log("connect successful")
})
mongoose.connection.on('error',(err) => {
	console.log("connect failed",err)
})

require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))

app.listen(PORT,()=>{
	console.log("Running",PORT)
})