const express = require('express');
const app = express()
app.use(express.json())
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const cors = require('cors');
require('dotenv/config');

// //conected to database
async function conntectDtabase(){
    try {
        await mongoose.connect(process.env.mogourl);
        console.log('DatabaseConnected!')
    } catch (error) {
        console.log(error)
    }
}
conntectDtabase()
//************************************** */
app.use(cors())
// app.use(express.urlencoded())
//ROUTES
const UserRoute = require("./src/routes/UserRoute");
const RecipiRoute = require("./src/routes/RecipiRoute")
const teokenvalidation = require("./src/medelware/Tokenvarification")

app.get("/",(req,res)=>{
    res.json({
        status:"working.............................."
    })
})
app.use("/user",UserRoute);
app.use("/reci",teokenvalidation,RecipiRoute);

app.use('*',(req,res)=>{
    res.status(404).json({
        status:"worong url! 404 not found"

    })
});

app.listen(process.env.port, () => {
    console.log(`Prt Example full stack app (recipy app) ${process.env.port}`)
  })