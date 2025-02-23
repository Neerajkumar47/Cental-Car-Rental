const bodyParser = require("body-parser")
const encoder = bodyParser.urlencoded()
const{superAdminCheker}=require("../../middleware/roleCheckerMiddleware")
const AdminUserRouter= require("express").Router()

const{home,create,store,remove,edit,update}=require("../../controller/admin/UserController")

AdminUserRouter.get("/",home)

 AdminUserRouter.get("/create",superAdminCheker,create)
 AdminUserRouter.post("/store",superAdminCheker,encoder,store)
 AdminUserRouter.get("/delete/:_id",superAdminCheker,encoder,remove)
 AdminUserRouter.get("/edit/:_id",superAdminCheker,encoder,edit)
 AdminUserRouter.post("/update/:_id",superAdminCheker,encoder,update)

module.exports=AdminUserRouter
