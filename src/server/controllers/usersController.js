const User = require('../models/User');
const bcrypt = require('bcrypt');

// Get All User
const user_get_all = async (req, res) => {
    try {
        const usersList = await User.find();
        res.json(usersList).status(200);
    } catch (err) {
        res.json({ message: err }).status(404);
    };
};

// Update User Information
const user_patch = async (req, res) => {
    try {
        const emailExist = await User.findOne({ email: req.body.email })
        if (emailExist) return res.json({ error: 'Email already exists.' }).status(400);
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const { password } = req.body
        bcrypt.hash(password, salt, (err, hash) => {
            if (err) return res.json({ message: 'e ' + err }).status(404);
            // Update user
            const update = User.updateOne({ _id: req.body.id }, {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    password: hash,
                    isAdmin: req.body.isAdmin
                }
            });
            update.exec();
            res.json({ message: 'User successfully updated!' }).status(200);
        });

    } catch (err) {
        res.json({ message: err }).status(404);
    };
};

// Delete User
const user_delete = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.json({ error: 'User not found' }).status(404);

        } else {
            user.deleteOne();
            res.json('User successfully deleted!').status(202);
        };

    } catch (err) {
        res.json({ message: err }).status(404);
    };
};

module.exports = {
    user_get_all,
    user_patch,
    user_delete
}