const{isLogin}=require("../../middleware/roleCheckerMiddleware")
const AdminContactRouter= require("express").Router()
const{home,remove,edit,show}=require("../../controller/admin/contactController")

 AdminContactRouter.get("/",home)
 AdminContactRouter.get("/delete/:_id",isLogin,remove)
 AdminContactRouter.get("/edit/:_id",isLogin,edit)
 AdminContactRouter.get("/show/:_id",isLogin,show)
// 
module.exports=AdminContactRouter
  

// const bodyParser = require("body-parser")
// const encoder = bodyParser.urlencoded()