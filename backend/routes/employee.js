const express = require("express");
const router = express.Router();
const User = require("../models/User");

// @route   POST /api/employee
// @desc    Create new user

router.post("/users/individual/update", async(req,res) => {
  /**
   * Handling updates to the personal page 
   * Name, email, cell, notes, & location
   */
})


router.post("/users/individual", async (req, res) => {
  const employeeExisist = await User.findOne({ email: req.body.email });
  const user = req.body;
  

  try {
    if (employeeExisist == null) {
      // If new employee is not in database

      if (
        req.body.fname == "" ||
        req.body.lname == "" ||
        req.body.email == "" ||
        req.body.phone_number == "" ||
        req.body.position == "" ||
        req.body.location == ""
      ) {
        res.json({
          status: 406, // Need to find correct code
          response: `Hold on a second! Make sure all fields are filled out.`,
        });
      } else {
        // Clean user data entries
        const nuser = new User({
          fname: req.body.fname,
          lname: req.body.lname,
          email: req.body.email,
          phone_number: req.body.phone_number,
          position: req.body.position,
          location: req.body.location,
          whenIWork: req.body.whenIWork,
          newTek: req.body.newTek,
          training: req.body.training,
          schedule: req.body.schedule,
        });

        await nuser.save();
        res.json({
          status: 200,
          response: `Success! ${req.body.fname} has been added.`,
        });
      }
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

router.post("/users/group", async (req, res) => {
  // Handle group uploads
  try {
    const user = req.body;

    for (let i = 0; i < user.length; i++) {
      if (user[i].fname == "") {
        // Skips last row
        if (
          user[i].lname == "" ||
          user[i].email == "" ||
          user[i].phone_number == "" ||
          user[i].position == "" ||
          user[i].location == ""
        ) {
          res.json({
            status: 406, // Need to find correct code
            response: `Hold on a second! Make sure all fields are filled out.`,
          });
          break;
        } else {
          continue;
        }
      } else {
        try {
          if (user[i].fname == "") {
            continue;
          }
          const nuser = new User({
            fname: user[i].fname,
            lname: user[i].lname,
            email: user[i].email,
            phone_number: user[i].phone_number,
            position: user[i].position,
            location: user[i].location,
            whenIWork: user[i].whenIWork,
            newTek: user[i].newTek,
            training: user[i].training,
            schedule: user[i].schedule,
            hired: user[i].hired,
            backgroundCheck: user[i].backgroundCheck,
            travelWillingness: user[i].travelWillingness,
            rate: user[i].rate,
          });

          if (user[i].whenIWork == "TRUE") {
            nuser["whenIWork"] = true;
          } else {
            nuser["whenIWork"] = false;
          }
          if (user[i].newTek == "TRUE") {
            nuser["newTek"] = true;
          } else {
            nuser["newTek"] = false;
          }
          if (user[i].backgroundCheck == "TRUE") {
            nuser["backgroundCheck"] = true;
          } else {
            nuser["backgroundCheck"] = false;
          }
          if (user[i].travelWillingness == "TRUE") {
            nuser["travelWillingness"] = true;
          } else {
            nuser["travelWillingness"] = false;
          }
          if (user[i].training == "TRUE") {
            nuser["training"] = true;
          } else {
            nuser["training"] = false;
          }
          if (user[i].schedule == "TRUE") {
            nuser["schedule"] = true;
          } else {
            nuser["schedule"] = false;
          }
          if (user[i].hired == "TRUE") {
            nuser["hired"] = true;
          } else {
            nuser["hired"] = false;
          }
          await nuser.save();
          uploadedUsers.append(user[i].fname);
        } catch (err) {
          console.log(err);
        }
      }
    }

    res.json({
      status: 200, // Need to find correct code
      response: `Success.`,
    });
  } catch (err) {
    res.json({
      status: 500, // Need to find correct code
      response: `Server Error.`,
    });
  }
});

router.get("/users", async (req, res) => {
  data = await User.find({});
  res.json({ data: data });
});

router.post("/users/update/booleans", async (req, res) => {
  const body = req.body;
  const employeeExisist = await User.findOne({ _id: body._id });
  
  // Clear DB
  //const rem = await User.deleteMany({})


  if (!employeeExisist) {
    res.json({
      status: 500, // Need to find correct code
      response: `Server Error.`,
    });
  } else {
    try {
      toChange = body.toChange;
      newStatus = body.status
      id = body._id;

      const update = await employeeExisist.updateOne({ [toChange]: newStatus })

      res.json({
        status: 200, // Need to find correct code
        response: `Successfully updated.`,
      });
    } catch (err) {
      console.log(err);
      res.json({
        status: 500, // Need to find correct code
        response: `Server Error.`,
      });

    }
  }
});


router.post("/users/findone", async (req, res) => {
  const body = req.body
  data = await User.findOne({_id:body._id})
  res.json({ status: 200, data: data });
});

module.exports = router;
