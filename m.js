const express=require('express');
const BrandName=require('/model');
const app=express();

app.use(express.json());

const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://prakashkomati:SURYA@cluster0.r5z5mbl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster').then(
    ()=>console.log('DataBase Created...')
).catch((err)=>console.log(err))
app.post('/addbrands',async(req,res)=>{
    const {brandname}=req.body;
    try{
         const newData=newBrandName({brandname});
         await newData.save();
         return res.json(await BrandName.find())
    }
    catch(err){
        console.log(err.message);
    }
})
app.listen((3000),()=>console.log("Server Running"))