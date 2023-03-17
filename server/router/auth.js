const express = require('express');

const router = express.Router();

require('../db/conn');
const user = require('../models/userSchema')



router.get("/", function (req, res) {
    res.send("JAI SHREE RAM ");
});

// postman api
// router.post("/register", (req,res)=>{

//     const {name,email,phone,profession} = req.body;
// // with the help of Promise
//     if(!name|| !email|| !phone|| !profession){
//         return res.status(422).json({error:"fill the fields properly"});
//     }

//     user.findOne({email:email})
//     .then((userExist) => {
//         if(userExist){
//             return res.status(422).json({error:"fill the fields properly"});

//     }

//     const User = new user({name,email,phone,profession});

//     User.save().then(()=>{
//         res.status(201).json({message:"user registered successfully"});
//     }).catch((err)=> res.status(500).json ({error:"failed"}));


// }).catch(err => {console.log(err);
// });
// })
// or
// async-await 
router.post("/register", async (req, res) => {
    const { name, email, phone, profession } = req.body;

    if (!name || !email || !phone || !profession) {
        return res.status(422).json({ error: "fill the fields properly" });
    }
    try {
        const userExist = await user.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "email already exist" });

        }
        const User = new user({ name, email, phone, profession });
        await User.save();
        res.status(201).json({ message: "user registered successfully" });

    } catch (err) {
        console.log(err);
    }
});


// login route

router.post("/signup", async(req,res)=>{
   
    try {
        const {email,phone} = req.body;
        if(!email || !phone ){
            return res.status(422).json({ error: "fill the data properly" });

        }
        const userLogin = await user.findOne({email:email});

        console.log(userLogin);

        if(!userLogin){
            res.json({err:"sighup not successful"});
        }else{
            res.json({message:"sighup successful"});

        }

        
        
        
    } catch (error) {
        console.log(error);
        
    }

})






module.exports = router;