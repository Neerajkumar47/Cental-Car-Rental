const{isLogin}=require("../../middleware/roleCheckerMiddleware")
const AdminCarRouter= require("express").Router()
const{carsUploader}=require("../../middleware/multerMiddlerware")
// const{home,create,store,remove,edit,update}=require("../../controller/admin/testimonialController")
const{home,create,store,remove,edit,update}=require("../../controller/admin/carController")

AdminCarRouter.get("/",home)

 AdminCarRouter.get("/create",isLogin,create)
 AdminCarRouter.post("/store",isLogin,carsUploader.single("pic"),store)
 AdminCarRouter.get("/delete/:_id",isLogin,remove)
 AdminCarRouter.get("/edit/:_id",isLogin,edit)
 AdminCarRouter.post("/update/:_id",carsUploader.single("pic"),isLogin,update)
// 
module.exports=AdminCarRouter
  

// const bodyParser = require("body-parser")
// const encoder = bodyParser.urlencoded()