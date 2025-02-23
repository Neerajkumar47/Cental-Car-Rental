const{isLogin}=require("../../middleware/roleCheckerMiddleware")
const AdminBookingRouter= require("express").Router()
const{home,remove,edit,show}=require("../../controller/admin/contactController")

 AdminBookingRouter.get("/",home)
 AdminBookingRouter.get("/delete/:_id",isLogin,remove)
 AdminBookingRouter.get("/edit/:_id",isLogin,edit)
 AdminBookingRouter.get("/show/:_id",isLogin,show)
// 
module.exports=AdminBookingRouter
  

// const bodyParser = require("body-parser")
// const encoder = bodyParser.urlencoded()