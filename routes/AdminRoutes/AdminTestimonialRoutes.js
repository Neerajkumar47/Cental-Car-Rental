const{isLogin}=require("../../middleware/roleCheckerMiddleware")
const AdminTestimonialRouter= require("express").Router()
const{testimonialsUploader}=require("../../middleware/multerMiddlerware")
// const{home,create,store,remove,edit,update}=require("../../controller/admin/testimonialController")
const{home,create,store,remove,edit,update}=require("../../controller/admin/testimonialController")

AdminTestimonialRouter.get("/",home)

 AdminTestimonialRouter.get("/create",isLogin,create)
 AdminTestimonialRouter.post("/store",isLogin,testimonialsUploader.single("pic"),store)
 AdminTestimonialRouter.get("/delete/:_id",isLogin,remove)
 AdminTestimonialRouter.get("/edit/:_id",isLogin,edit)
 AdminTestimonialRouter.post("/update/:_id",testimonialsUploader.single("pic"),isLogin,update)
// 
module.exports=AdminTestimonialRouter
  

// const bodyParser = require("body-parser")
// const encoder = bodyParser.urlencoded()