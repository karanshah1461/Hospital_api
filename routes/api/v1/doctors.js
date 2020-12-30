//Require Express and Router
const express=require("express");
const router=express.Router();

//importing controller
const doctorsApi=require('../../../controller/api/v1/doctors_api');
const jwt = require('../../../config/passport-jwt-strategy');

//Routes
router.use("/register", doctorsApi.register);
router.use("/login", doctorsApi.login);
// router.use("/", (req, res) => {
//     res.status(200).json({
//         message : "Welcome to Doctors Home Page"
//     })
// });


//Exporting Router
module.exports = router;
