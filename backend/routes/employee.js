const express = require("express");
const router = express.Router();
const User = require("../models/User");

// @route   POST /api/employee
// @desc    Create new user

router.post("/users/individual", async (req, res) => {
  const employeeExisist = await User.findOne({ email: req.body.email });
  const user = req.body;
  console.log(user);

  try {
    if (employeeExisist==null) {
      // If new employee is not in database

      // Clean user data entries
      const nuser = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        phone_number: req.body.phone_number,
        position: req.body.position,
        location: req.body.location,
      });

      await nuser.save();
      res.json({
        status: 200,
        response: `Success! ${req.body.fname} has been added.`,
      });
    } else {
      // Response if employee is in DB
      res.json({
        status: 200,
        response: `${req.body.fname} is already in the database!`,
      });
    }
  } catch (err) {
    // Catch a server error
    res.json({
      status: 500,
      response: `Uh Oh! Server error trying to upload ${req.body.fname}.`,
    });
  }
});

router.get("/users", async (req, res) => {
  data = await User.find({});
  res.json({ data: data });
});

module.exports = router;
