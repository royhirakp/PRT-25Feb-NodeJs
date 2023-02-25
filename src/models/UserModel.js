const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const RecipiScama  = new Schema({   
    email: {required: true, type:String }, 
    password : { type:String ,required: true},
  })
  const recipiUserModel = mongoose.model('User', RecipiScama ); // NOT COMPLITED 
  module.exports = recipiUserModel;