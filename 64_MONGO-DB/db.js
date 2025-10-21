const moongose=require("mongoose");
const schema=moongose.Schema;
const ObjectId=moongose.ObjectId;

const user=new schema({
    name:String,
    email:String,
    password:String
})

const todos=new moongose.Schema({
    title:String,
    done:Boolean,
    userId:ObjectId
})