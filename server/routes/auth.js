const express = require('express');
const User = require('../schemas/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const SelectedEmails=require('../shared/SelectedEmail');

router.post('/signup',async (req,res)=>{

  const {name , email,password}=req.body;
  if(email==null || password==null){
    res.status(400).send("Invalid Fields");
    return;
  }
  if(SelectedEmails.find((obj)=>email)==null){
    res.status(400).send("Email Not Found");
    return;
  }
  let user = await User.findOne({ email });
  if(user){
    res.status(400).send("Please Login");
    return;
  }
  user=new User({
    name :name,
    email:email,
    password:NewPass

    
    
  });
  const salt = await bcrypt.genSalt(10);
  const NewPass = await bcrypt.hash(password, salt);
  user.password=NewPass;
  user.save().then((newuser)=>{
    res.status(200).send(newuser);
  }).catch((err)=>res.status(400).send(err));

})

router.post('/login',[
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
    
  ],async ()=>{
 

    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  



                let user = await User.findOne({ email });
                if (!user) {
                success = false
                return res.status(400).json({ error: "Please try to login with correct credentials" });
                }

                const salt = await bcrypt.genSalt(10);
                const secPass = await bcrypt.hash(req.body.password, salt);
                if (user.email===email &&user.password===secPass){
                  //  pls enter appropirate redirection
                }
                else{
                  return res.status(400).json({ errors: errors.array() });


                }
                

               

                
})

/*
router.post('/getuser', fetchuser,  async (req, res) => {

    try {
      userId = req.user.id;
      const user = await User.findById(userId).select("-password")
      res.send(user)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })
  */
  module.exports = router
