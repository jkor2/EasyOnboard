const express = require("express")
const router = express.Router()
const User = require("../models/User")


// @route   POST /api/employee
// @desc    Create new user 

router.post("/newuser", async (req, res) => {
    const user =  req.body
    console.log(user)

    // Clean user data entries 


    const nuser = new User({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    phone_number: req.body.phone_number,
    position: req.body.position,
    location: req.body.location, 
     })
     
     await nuser.save()
     res.status(200)
     
    

})

router.get("/users", async(req, res) => {
    data = await User.find({})
    console.log(data)
    res.json({data: data})
})



module.exports = router