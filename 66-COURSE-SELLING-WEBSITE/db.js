const {schema , default:mongoose}=require("mongoose")

const userSchema=schema({
    
})
const adminSchema=schema({

})
const courseSchema=schema({

})
const purchaseSchema=schema({

})

const UserModel=mongoose.Model("user",userSchema);
const adminModel=mongoose.Model("admin",adminSchema);
const courseModel=mongoose.Model("course",courseSchema);
const purchaseModel=mongoose.Model("purchase",purchaseSchema);

