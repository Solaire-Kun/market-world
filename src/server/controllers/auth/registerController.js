const User = require('../../models/User');
const bcrypt = require('bcrypt');
const { registerValidation } = require('./validation');

const register = async (req, res) => {
    // Validate
    const { error } = registerValidation(req.body);
    if (error) return res.send(error.details[0].message).status(400);

    // Check if email exists
    const { username, email, password } = req.body
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.send('Email already exists.').status(400);

    // Hash password
    const salt = await bcrypt.genSalt(10);
    bcrypt.hash(password, salt, (err, hash) => {
        if (err) return res.json({ message: 'e ' + err }).status(404);
        // Register user
        User.create({
            username,
            email,
            password: hash
        });
        res.json('User successfully registered!').status(201);
    });
};

module.exports = {
    register
};