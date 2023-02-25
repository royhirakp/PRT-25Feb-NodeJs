const express = require('express')
const multer = require('multer');
const router = express.Router();
const fs = require('fs')
const RecipiModel = require("../models/RecipyModel")
const bodyParser = require('body-parser')
router.use(bodyParser.json())

// FileStore IMAGE
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,'public/image')
    },
    filename:(req,file,cb)=>{
      cb(null, file.originalname)
    }
  })
const uplode = multer({storage: storage})
router.post('/', uplode.single('image') , async (req,res)=>{
    // console.log(req.body,'req.body')
    let ingridents = req.body.ingredients;
    ingridents = ingridents.split(',')
    console.log(ingridents)
    // console.log(req.file,'req.file')
    try {
        const recipi = await RecipiModel.create({
            title: req.body.title,
            author: req.body.author,
            image: {
                data: fs.readFileSync('public/image/' + req.file.filename),
                contentType: 'image/png'
              },    
            ingredients: ingridents,
            directions:  req.body.directions,
            user: req.userID
        })
        res.json({
            recipi,
            status:"sucsess"
        })
    } catch (error) {
        res.status(500).json({
            status:"error",
           messege: error.messege
        })
    }
})


router.get('/', async (req,res)=>{
    try {
        // console.log(req.userID)
        let recipi = await RecipiModel.find({user:req.userID});
        console.log("recipi count: ",recipi.length)
    res.json({
        status:'susecss',
        recipi
    })
        
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            messege: error.messege
        })        
    }
})
//get a particuler recipi

router.get('/:id', async (req,res)=>{
    try {
        // console.log(req.userID)
        let recipi = await RecipiModel.find({_id:req.params.id});
        console.log("recipi count: ",recipi.length)
    res.json({
        status:'susecss',
        recipi
    })
        
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            messege: error.messege
        })        
    }
})

module.exports = router;