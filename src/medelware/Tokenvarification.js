// console.log('working.......')


const jsw = require('jsonwebtoken');


const tokenVarification = (req,res,next)=>{
    if(req.headers.authorization){
      const token = req.headers.authorization;
      jsw.verify(token,'hirak',(err,decode)=>{
        if(err){
          return res.status(403).json({
            status:'filed/ login againn'
          })
        }
        req.userID = decode.data;
        next();
      })
    }else{
      res.json({
        status: 'failed',
        messege: "token missing "
      })
    }
  }

module.exports = tokenVarification;