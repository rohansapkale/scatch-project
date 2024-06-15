const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owners-model");

if(process.env.NODE_ENV=== undefined){
    router.post("/create", async function(req,res){
      let owners = await ownerModel.find();
      if(owners.length>0) {
        return res
        .status(503)
        .send("You don't have permission to create a owner");
      }
      let {fullname,email,password} = req.body;

    let createdOwner = await  ownerModel.create({
        fullname,
        email,
        password,        
      });
      res.send(createdOwner);
    });
    router.get("/read", async function (req, res) {
        try {
            // Find all owners and return their details
            let owners = await ownerModel.find({}, "fullname email password");
    
            // Check if there are owners
            if (owners.length === 0) {
                return res.status(404).send("No owners found");
            }
    
            // Send the list of owners as a response
            res.send(owners);
        } catch (error) {
            res.status(500).send({ message: "Error reading owners", error });
        }
    });
}

router.get("/admin",function(req,res){
    let success = req.flash("success");
    res.render("createproducts",{success});
});

module.exports = router;