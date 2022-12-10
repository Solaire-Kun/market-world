const User = require('../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { loginValidation } = require('./validation');

const login = async (req, res) => {
    // Validate
    const { error } = loginValidation(req.body);
    if (error) {
        return res.send(error.details[0].message).status(400);
    } else {
        // Check if email is correct
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.send('Email or password is incorrect.').status(400);
        console.log('email correct')
        // Check if password is correct
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.send('Email or password is incorrect.').status(400);
        console.log('password correct')
        // Generate token
        console.log('before token')
        const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
        //localStorage.setItem('auth-token', token)
        console.log('after token')
        res.header('auth-token', token).json('Logged in! ' + token).status(200);
    };
};

module.exports = {
    login
};