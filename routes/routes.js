const router= require("express").Router()

const  {homePage,aboutPage,servicePage,featurePage,carsPage,testimonialPage,contactPage,errorPage, contactStorePage, bookingPage, bookingStorePage, bookingConfirmation} = require("../controller/frontController")

const AdminHomeRouter= require("./AdminRoutes/AdminRoutes")
router.get("/",homePage)
router.get("/booking",bookingPage)
router.post("/booking",bookingStorePage)
router.get("/about",aboutPage)
router.get("/service",servicePage)
router.get("/feature",featurePage)
router.get("/cars",carsPage)
router.get("/testimonial",testimonialPage)
router.get("/contact",contactPage)
router.post("/contact",contactStorePage)
router.get("/booking-confirmation",bookingConfirmation)

router.use("/admin",AdminHomeRouter)

//Admin Routes
router.get("/admin",AdminHomeRouter)



router.get("/*",errorPage)

module.exports=router