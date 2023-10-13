const express=require("express");
const app=express();
const {sikp} =require("mongoose")
const dbConnection = require('./db')
const books=require('./modal/book')
var cors = require('cors');
app.use(cors());

app.use(express.json())


app.post("/api/books",async(req,res)=>{
    // console.log(req.body.newBook)
const newBook=req.body.newBook;
const newBookSaved=new books(newBook)
await newBookSaved.save()
res.json(("hello"))
})



app.post("/api/books/:id",async(req,res)=>{
const id=req.params.id;
const bookdata=req.body;
console.log(id)
const data=await books.updateOne( { id: id },
{
  $set: {
    author: bookdata.author,
    country:bookdata.country,
    language:bookdata.language,
    link:bookdata.link,
    pages:bookdata.pages,
    title:bookdata.title,
    year:bookdata.year,
    id:bookdata.id
  }
})
res.json("updated succesfully")

})



app.get("/api/books",async(req,res)=>{
let page=Number(req.query.page)||1;
let limit=Number(req.query.limit)||2
let skip=(page-1)*limit;
    const data=await books.find({}).skip(skip).limit(limit).sort({id:1}); 
    // data=data.skip(skip).limit(limit)   ;
    res.json({data})
})

app.get("/api/books/:id",async(req,res)=>{
    const id=req.params.id
    const data=await books.findOne({id:id})
    console.log(data)
    res.json({data})
})



app.listen(8000,()=>{
    console.log("server is running on 8000")
})