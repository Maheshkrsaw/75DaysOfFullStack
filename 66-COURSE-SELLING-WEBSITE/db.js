const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://Mahesh:MaheshMahi@cluster0.cjdwieg.mongodb.net/Course-Selling-db")
const Schema=mongoose.Schema;
const ObjectId=mongoose.Types.ObjectId;


const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstname: String,
  lastname: String,
});

const adminSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstname: String,
  lastname: String,
});

const courseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorid: ObjectId, // references the admin
});

const purchaseSchema = new Schema({
  UserId: ObjectId, // references user
  creatorid: ObjectId, // references admin/course
});


const UserModel = mongoose.model("user", userSchema);
const AdminModel = mongoose.model("admin", adminSchema);
const CourseModel = mongoose.model("course", courseSchema);
const PurchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports={
    UserModel,
    AdminModel,
    CourseModel,
    PurchaseModel
}