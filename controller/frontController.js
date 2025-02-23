const Testimonial=require("../models/Testimonial")
const Car=require("../models/Car")
const Contact = require("../models/Contact")
const Booking = require("../models/Booking")
const twilio = require("twilio");
const mailer=require("../mailer/index")
const twilioClient  = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

async function homePage(req,res){
   try{
    const testimonials=await Testimonial.find().sort({_id:1,})
    const cars=await Car.find().sort({_id:1})
    res.render("index",{session:req.session,title:"Home",cars:cars,testimonials:testimonials})
   }catch(error){
     console.log(error);
     
   }
}

async function bookingPage(req,res){
    try{
     const testimonials=await Testimonial.find().sort({_id:1,})
     const cars=await Car.find().sort({_id:1})
     res.render("booking",{session:req.session,title:"Booking",cars:cars,testimonials:testimonials})
    }catch(error){
      console.log(error);
      
    }
 }

 async function bookingStorePage(req,res){
    try{
   
     var data=new Booking(req.body)
     data.date=new Date()
     await data.save()
     await twilioClient.messages.create({
      body: `Booking confirmed!!!
             Hello ${req.body.name},Your Booking Has been Confirmed Our Team Will Contact You Soon!!`,
             
      from:process.env.SMS_SENDER,
      to:req.body.phone.startsWith("+91")?req.body.phone:"+91"+req.body.phone,
    });
  //   console.log(message);
   
 mailer.sendMail({
  sender:process.env.EMAIL_SENDER,
  to:req.body.email,
  subject:"Query Recevied",
  text:`Booking confirmed
               Hello ${req.body.name},
               Your Booking Has been Confirmed 
               Our Team Will Contact You Soon!!`,
             
 },(error)=>{
  if(error)
     console.log(error);
      
 }) 
 mailer.sendMail({
  sender:process.env.EMAIL_SENDER,
  to:process.env.EMAIL_SENDER,
  subject:"New Booking Recevied",
  html:`
  <table border="2px" cellpadding="10px"> 
    <tr>
    <th>Name</th>
    <td>${req.body.name}</td>
    </tr>
    <tr>
    <th>Email</th>
    <td>${req.body.email}</td>
    </tr>
    <tr>
    <th>Phone</th>
    <td>${req.body.phone}</td>
    </tr>
    <tr>
    <th>Pickup</th>
    <td>${req.body.pickup}</td>
    </tr>
    <tr>
    <th>Drop</th>
    <td>${req.body.drop}</td>
    </tr>
    <th>Pickup Date</th>
    <td>${req.body.pickupDate}</td>
    </tr>
    <th>Car</th>
    <td>${req.body.car}</td>
    </tr>
  </table>`,
 
 },(error)=>{
  if(error)
     console.log(error);
      
 })
     res.redirect("/booking-confirmation")
    
    }catch(error){
        errorMessage = {}
        var testimonials=await Testimonial.find().sort({_id:1,})
        var cars=await Car.find().sort({_id:1})
        
        error.errors?.name?(errorMessage['name']=error.errors?.name.message):""
        error.errors?.email?(errorMessage['email']=error.errors?.email.message):""
        error.errors?.phone?(errorMessage['phone']=error.errors?.phone.message):""
        error.errors?.pickup?(errorMessage['pickup']=error.errors?.pickup.message):""
        error.errors?.drop?(errorMessage['drop']=error.errors?.drop.message):""
        error.errors?.car?(errorMessage['car']=error.errors?.car.message):""
        error.errors?.pickupDate?(errorMessage['pickupDate']=error.errors?.pickupDate.message):""
        if(req.body.page==="Home")
            res.render("index",{session:req.session,title:"Booking",cars:cars,testimonials:testimonials,data,errorMessage})
          else
        res.render("booking",{session:req.session,title:"Booking",cars:cars,testimonials:testimonials,data,errorMessage})
      
        console.log(error);
      
    }
 }

 async function bookingConfirmation(req,res) {
    var testimonials=await Testimonial.find().sort({_id:1,})
    res.render("booking-confirm",{title:"Booking Confirmation",testimonials}) 
 }


function aboutPage(req,res){
    res.render("aboutPage",{session:req.session,title:"Aboutus Page"})
}
function servicePage(req,res){
    res.render("servicePage",{session:req.session,title:"Services Page"})
}

function featurePage(req,res){
    res.render("featurePage",{session:req.session,title:"Features Page"})
}
async function carsPage(req,res){
   try{
    const cars=await Car.find().sort({_id:1})
    res.render("carsPage",{session:req.session,title:"Cars Page",cars:cars})
   }catch(error){
    console.log(error);
    
   }

}
// function testimonialPage(req,res){
//     res.render("testimonialPage",{session:req.session,title:"testimonial Page"})
// }
async function testimonialPage(req,res){
   try{
    const testimonials=await Testimonial.find().sort({_id:1})
    res.render("testimonialPage",{session:req.session,title:"testimonial Page",testimonials:testimonials})
   }catch(error){
    console.log(error);
    
   }
}
 


function contactPage(req,res){
    res.render("contactPage",{session:req.session,title:"Contact Page", errorMessage:{},data:{},show:false})
}

async function contactStorePage(req,res){
   try{
    var data=new Contact(req.body)
    data.date=new Date()
    await data.save()

     await twilio.messages.create({
        body: `Query Receved
               Thanks ${req.body.name},Your Query Has been Recieved Our Team Will Contact You Soon!!`,
               
        from:process.env.SMS_SENDER,
        to:req.body.phone.startsWith("+91")?req.body.phone:"+91"+req.body.phone,
      });
    //   console.log(message);
     
   mailer.sendMail({
    sender:process.env.EMAIL_SENDER,
    to:req.body.email,
    subject:"Query Recevied",
    text:`Query Receved
               Thanks ${req.body.name},
               Your Query Has been Recieved
                Our Team Will Contact You Soon!!`,
               
   },(error)=>{
    if(error)
       console.log(error);
        
   }) 
   mailer.sendMail({
    sender:process.env.EMAIL_SENDER,
    to:process.env.EMAIL_SENDER,
    subject:"New Query Recevied",
    html:`
    <table border="2px" cellpadding="10px"> 
      <tr>
      <th>Name</th>
      <td>${req.body.name}</td>
      </tr>
      <tr>
      <th>Email</th>
      <td>${req.body.email}</td>
      </tr>
      <tr>
      <th>Phone</th>
      <td>${req.body.phone}</td>
      </tr>
      <tr>
      <th>Subject</th>
      <td>${req.body.subject}</td>
      </tr>
      <tr>
      <th>Message</th>
      <td>${req.body.message}</td>
      </tr>
    </table>`,
   
   },(error)=>{
    if(error)
       console.log(error);
        
   }) 

    res.render("contactPage",{session:req.session,title:"Contact Page", errorMessage:{},data:{},show:true})
   }catch(error){
   console.log(error);
   errorMessage = {}
   error.errors?.name?(errorMessage['name']=error.errors?.name.message):""
   error.errors?.email?(errorMessage['email']=error.errors?.email.message):""
   error.errors?.phone?(errorMessage['phone']=error.errors?.phone.message):""
   error.errors?.subject?(errorMessage['subject']=error.errors?.subject.message):""
   error.errors?.message?(errorMessage['message']=error.errors?.message.message):""
   
res.render("contactPage",{errorMessage:errorMessage,data:data,show:false})

   }
}

function errorPage  (req,res){
    res.render("404",{session:req.session,title:"404! Page Not Found"})
}

module.exports={
    homePage,
    aboutPage,
    servicePage,
    featurePage,
    carsPage,
    testimonialPage,
    contactPage,
    contactStorePage,
    bookingPage,
    bookingStorePage,
    bookingConfirmation,
    errorPage
}