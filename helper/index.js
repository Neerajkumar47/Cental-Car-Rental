const session = require("express-session")
const hbs=require("hbs")

// hbs.registerHelper('isLogin',function(){
//     return localStorage.getItem("login")??false
// })

hbs.registerHelper('isLogin',function(session){
    return session && session.login ?true: false
})


// hbs.registerHelper('adminName', function(){
//     return localStorage.getItem("name")??""
// })

hbs.registerHelper('userName', function(session){
 return session && session.login ?session.name:""
})
// hbs.registerHelper('checkRoleAdmin', function(role){
//     return role==="Admin"?"selected":""
// })
// hbs.registerHelper('checkRoleSuperAdmin', function(role){
//     return role==="Super Admin" ? true:""
// })
 

// hbs.registerHelper('checkRole', function(selectedRole,role){
//     return selectedRole===role? "selected":""
// })
//Testimonial active ke liye
// hbs.registerHelper('checkActive', function(selectedStatus,status){
//     return selectedStatus===status? "selected":""
// })
//en dono ke badale
hbs.registerHelper('checkDropDown', function(selected,option){
    return selected===option? "selected":""
})


hbs.registerHelper('isSuperAdmin', function(session){
    return session && session.role==="Super Admin"? true:false
})

hbs.registerHelper('getDate',function(date){
    return  new Date(date).toLocaleDateString()
})
