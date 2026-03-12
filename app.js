const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.use(express.static("public"))

const foods = [
    {name:"Biryani", city:"Karachi", image:"/images/biryani.jpg.jpg"},
    {name:"Sajji", city:"Balochistan", image:"/images/sajji.jpg.jpg"},
    {name:"Chapli Kabab", city:"Peshawar", image:"/images/chapli.jpg.jpg"}
]
app.get("/", (req,res)=>{
    res.render("index")
})
app.get("/foods",(req,res)=>{
    res.render("foods",{foods})
})

app.get("/about",(req,res)=>{
    res.render("about")
})
app.listen(3003,()=>{
    console.log("Server running on http://localhost:3003")
})