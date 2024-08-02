const express=require('express')
const dotenv=require('dotenv')
const {MongoClient}=require('mongodb')
const app=express()
dotenv.config()
MongoClient.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Mongodb connected successfully")
}).catch((error)=>{
    console.log("Error",error)
})
console.log(process.env)

app.listen(3000,()=>{
    console.log('Server running')
})