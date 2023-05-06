const express=require("express")
const dotenv=require("dotenv").config();

const app=express();





app.set("view engine","ejs");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/public",express.static("public"));
app.use("/",require("./routes/bookRoutes"))
const PORT=process.env.PORT||8001;

 


app.listen(PORT,()=>{
    console.log(`connected to port ${PORT}`)
});


