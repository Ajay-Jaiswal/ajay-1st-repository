const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
//const BookController= require("../controllers/bookController")
const newController= require("../controllers/newController")

const commonM= require("../middlewares/commonM")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


// router.post("/createUser", UserController.createUser  )
// router.get("/getUsersData", UserController.getUsersData)


// const mid1= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid1")
//     // logic
//     let loggedIn = false

//     if (loggedIn== true) { 
//         console.log( "OK LOGGED IS IS TRUE NOW")
//         next ()
//     }
//     else {
//         res.send ("Please login or register")
//     }
// }

// // e.g. restricted and open-to-all API's can be handled like below now:
// router.get('/homePage', mid1, UserController.feeds)
// router.get('/profileDetails', mid1, UserController.profileDetails)
// router.get('/friendList', mid1, UserController.friendList)
// router.get('/changePassword', mid1, UserController.changePassword)

// router.get('/termsAndConditions',  UserController.termsAndConditions)
// router.get('/register',  UserController.register)

const midi1 = function(req, res, next){

    const header = req.headers.isfreeappuser
    if(header){
        if(header === "true")
        req['isFreeAppUser'] = true
        if(header === "false")
        req['isFreeAppUser'] = false
    next()
    }
    else res.send({msg: "An usefull header is missing"})
    }





//router.get("/basicRoute", UserController.basicCode)
router.post('/create-a-user', UserController.createAUser)

////////////////////////////////////////////////////
router.post('/createUser1',midi1,newController.createUser1)
router.post('/createOrder',midi1, newController.createOrder)
router.post('/createProduct',newController.createProduct)
router.get("/getOrder", newController.getOrder)



// router.get("/basicRoute2", commonMW.mid1, UserController.basicCode2)
// router.get("/basicRoute3", commonMW.mid2, UserController.basicCode3)
// router.get("/basicRoute4", commonMW.mid1, commonMW.mid4, UserController.basicCode4)




module.exports = router;