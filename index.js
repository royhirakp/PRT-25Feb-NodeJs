console.log('working.......')
const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require('dotenv/config');
console.log(process.env.port)
const app = express()

// //conected to database
async function conntectDtabase(){
    try {
        await mongoose.connect(process.env.mogourl);
        console.log('connccred database sucessfull!!!!!!!')
    } catch (error) {
        console.log(error)
    }
}
conntectDtabase()

app.get("/",(req,res)=>{
    res.json({
        status:"working.............................."
    })
})



app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${process.env.port}`)
  })