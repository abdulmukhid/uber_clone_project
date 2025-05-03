const dotenv=require('dotenv')
dotenv.config();
const express=require('express')
const cors=require('cors')
const app=express()
app.use(cors());

app.get('/',(req,res)=>{
  res.send("hello i am from index js")

})


module.exports=app