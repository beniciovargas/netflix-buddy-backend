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

const show = async (req, res) => {
    try {
        const user = await db.User.findById(req.params.id)
        .populate('nextUp')
        .populate('currentlyWatching')
        .populate('faves')
        .populate('friends')
        if(!user) res.status(404).json({error: "No users found with that ID."});
        res.json(user);
    }   catch (err) {
        res.status(500).json(err);
    }
}

const update = async (req, res) => {
    try {
        const updatedUser = await db.User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!updatedUser) res.status(404).json({error: 'User could not be updated.'});
    } catch (err) {
        res.status(500).json(err);
    }
}
const updateNext = async (req, res) => {
    try {
        const updatedUserNext = await db.User.findByIdAndUpdate(req.params.id, 
            {$push:{"nextUp": req.body.nextUp}}, 
            {new: true});
        if (!updatedUserNext) res.status(404).json({error: 'User could not be updated.'});
    }   catch (err) {
        res.status(500).json(err);
    }
}
const updateCurrent = async (req, res) => {
    try {
        const updatedUserCurrent = await db.User.findByIdAndUpdate(req.params.id, 
            {$push:{"currentlyWatching": req.body.currentlyWatching}}, 
            {new: true});
        if (!updatedUserCurrent) res.status(404).json({error: 'User could not be updated.'});
    }   catch (err) {
        res.status(500).json(err);
    }
}
const updateFaves = async (req, res) => {
    try {
        const updatedUserFave = await db.User.findByIdAndUpdate(req.params.id, 
            {$push:{"faves": req.body.faves}}, 
            {new: true});
        if (!updatedUserCurrent) res.status(404).json({error: 'User could not be updated.'});
    }   catch (err) {
        res.status(500).json(err);
    }
}
const updateFriends = async (req, res) => {
    try {
        const updatedUserFriends = await db.User.findByIdAndUpdate(req.params.id, 
            {$push:{"friends": req.body.friends}}, 
            {new: true});
        if (!updatedUserFriends) res.status(404).json({error: 'User could not be updated.'});
    }   catch (err) {
        res.status(500).json(err);
    }
}
const destroy = async (req, res) => {
    try {
        const deletedUser = await db.User.findByIdAndDelete(req.params.id);
        if (!deletedUser) res.status(404).json({error: 'User with that ID could not be found'});
        res.json(deletedUser);
    }   catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    index,
    show,
    update,
    updateNext,
    updateCurrent,
    updateFaves,
    updateFriends,
    destroy,
}