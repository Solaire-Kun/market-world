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
        if (!user) return res.json({ error: 'Email or password is incorrect or does not exist.' }).status(400);
        // Check if password is correct
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.json({ error: 'Email or password is incorrect or does not exist.' }).status(400);
        // Is user admin?
        const username = user.username;
        const id = user._id;
        if (user.isAdmin === true) {
            // Generate token
            const admin = true;
            const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
            res.json({ token, admin, username, id }).status(200);
        } else {
            // Generate token
            const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
            res.json({ token, username, id }).status(200);
        };
    };
};

module.exports = {
    login
};