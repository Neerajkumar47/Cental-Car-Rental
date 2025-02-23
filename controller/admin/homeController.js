const User = require("../../models/User")
async function home(req, res) {
  // console.log("req.session?.name");
 try{
 let data = await User.findOne({_id:req.session.userid})
 if(data)
 {
  res.render("admin/home/index", {session:req.session, title: "Admin Home",data:data });
 }
 else
 res.redirect("/admin/login")
 }catch(error){
  console.log(error);
  
 }
}
function login(req, res) {
  res.render("admin/home/login", {session:req.session, title: "Admin Login" });
}
// function loginStore(req,res){
//     res.render("admin/home/login",{title:"Admin Login"})
// }

async function loginStore(req, res) {
  // console.log("Login called ")
  // console.log("req.body",req.body)
  try {
    let data = await User.findOne({
      // email:req.body.username
      $and: [
        {
          $or: [
               { username: req.body.username }, 
               { email: req.body.username }
              ],
        },
        { password: req.body.password },
      ],
    });
    // console.log({data})
    if (data) {
      req.session.login = true;
      req.session.name = data.name;
      req.session.userid = data.id;
      req.session.role = data.role;
      var miliseconds = 86400000
      req.session.cookie.expires = new Date(Date.now() + miliseconds)
      req.session.cookie.maxAge =
      res.redirect("/admin")
    }
    else{
      res.render("admin/home/login", { title: "Admin Login" });
    }
  } catch (error) {
    console.log(error);
    
  }
}

function logout(req, res) {
  // console.log(req)
  // console.log(res)
  req.session.destroy((error) => {
    if (error) {
      console.error("Error destroying session:", error);
      return;
    }
    res.redirect("/admin/login");
  });
}



async function profileUpdate(req, res) {
  let data = await User.findOne({_id:req.session.userid})
 if(data)
 {
  res.render("admin/home/profile-update", {session:req.session, title: "Admin Profile Update",data:data });
 }
 else
 res.redirect("/admin/login")
  
}
async function profileUpdateStore(req,res){
  let data = await User.findOne({_id:req.session.userid})
  if(data){
   data.name=req.body.name
   data.username=req.body.username
   data.email=req.body.email
   data.phone=req.body.phone
  //  console.log(req.file);
   
  if(req.file){
    const fs= require("fs")
    try{
      const fs=require("fs")
      fs.unlinkSync(data.pic) 
    }catch(error){}
    data.pic=req.file.path
  }
  await data.save()
  res.redirect("/admin")
  }
  else
  res.redirect("/admin/login")
}


module.exports = { home, login, loginStore,logout,profileUpdate,profileUpdateStore };
