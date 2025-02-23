const mongoose= require("mongoose")

mongoose.connect("mongodb+srv://nk5347624:admin@cluster0.imovo.mongodb.net/car-rental")
.then(()=>{
    console.log("Database is Connected");
    
})
.catch((error)=>{
    console.log(error);
    a
})

// async function getConnect(){
//     try{
//       await mongoose.connect("mongodb://localhost:27017/cental")
//       console.log("Database is Connected");
      
//     }catch(error){
//       console.log(error);
      
//     }
// }
// getConnect()