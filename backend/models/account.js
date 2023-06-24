// create user schema in backend\modals\account.js: where schema contains id, name, balance, currency, parentId, familyId, userId, createdby, updatedby, createddate, updateddate
const mongoose = require('mongoose');
const Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;
const accountSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    balance:{
        type:Number,
        required:true,
        trim:true,
        min:0,
        max:1000000
    },
    currency:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    parentId:{
        type: ObjectId,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    familyId:{
        type:ObjectId,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    userId:{
        type:ObjectId,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    createdBy:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    updatedBy:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    createdDate:{
        type:Date,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    updatedDate:{
        type:Date,
        required:true,
        trim:true,
        min:3,
        max:20
    },
})
module.exports = mongoose.model('Account',accountSchema);