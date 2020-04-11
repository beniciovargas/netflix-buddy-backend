const db = require('../models');

const index = async (req, res) => {
    try {
        const users = await db.User.find({});
        if (!users) res.status(404).json({error: 'No users found.'});
        res.json(users);
    } catch (err) {
        res.status(500).json('whoops');
    }
}

module.exports = {
    index
}