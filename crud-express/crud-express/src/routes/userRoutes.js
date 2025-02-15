const mongoose = require('mongoose')
const express = require('express')
const User = require('../model/usermodel')
const router = express.Router()

//const User = mongoose.model('User ', userSchema);

// POST endpoint to add user data
router.post('/users', async (req, res) => {
    const { fname, age, addr } = req.body; //destructure the values from the request body
    const newUser  = new User({ fname, age, addr }); //create a new instance of the User model for the extracted values

    try {
        await newUser .save();
        res.status(201).json(newUser );
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/list', function(req,res,next){
    User.find()
    .then((response)=>{
        //console.log("Listed")
        res.send(response)
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.delete('/delete-user/:id', async (req, res) => {
    // Extracting the ID from the query parameters
    //console.log('Update user route hit');
    let { id } = req.params; // Use req.query to get the ID from the query string

    try {
        // Find user by ID and update their details
        var deletedUser  = await User.findByIdAndDelete(id);

        // If the user doesn't exist, return a 404
        if (!deletedUser ) {
            return res.status(404).json({ message: 'User  not found' });
        }

        // Return the updated user data
        res.status(200).json(deletedUser );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
})


router.put('/update-user/:id', async (req, res) => {
    // Extracting the ID from the query parameters
    //console.log('Update user route hit');
    const { id } = req.params; // Use req.query to get the ID from the query string
    const { fname, age, address } = req.body;

    try {
        // Find user by ID and update their details
        const updatedUser  = await User.findByIdAndUpdate(
            id,
            { fname, age, address }, // Update multiple fields
            { new: true, runValidators: true } 
        );

        // If the user doesn't exist, return a 404
        if (!updatedUser ) {
            return res.status(404).json({ message: 'User  not found' });
        }

        // Return the updated user data
        res.status(200).json(updatedUser );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
})


module.exports = router