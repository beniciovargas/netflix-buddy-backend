const db = require('../models');

const index = async (req, res) => {
    try {
        const shows = await db.Show.find({});
        if (!shows) res.status(404).json({error: 'This user has no shows yet.'});
        res.json(shows);
    } catch (err) {
        res.status(500).json('whoops');
    }
}

const show = async (req, res) => {
    try {
        const show = await db.Show.findById(req.params.id);
        if(!show) res.status(404).json({error: "No show found with that ID."});
        res.json(show);
    } catch (err) {
        res.status(500).json(err);
    }
}

const create = async (req, res) => {
    const newShow = {
        vtype: req.body.vtype,
        img: req.body.img,
        title: req.body.title,
        synopsis: req.body.synopsis,
    }
        db.Show.create(req.params.id, req.body);
            if (!newShow) res.status(404).json({error: 'Show not added'});
            res.json(newShow); 
}

// const create = async (req, res) => {
//     try {
//         const newShow = await db.Show.create(req.params.id, req.body);
//         if (!newShow) res.status(404).json({error: 'Show not added'});
//         res.json(newShow); 
//     } catch (err) {
//         res.status(500).json(err);
//     }
// }

const destroy = async (req, res) => {
    try {
        const deletedShow = await db.Show.findByIdAndDelete(req.params.id);
        if (!deletedShow) res.status(404).json({error: 'Show with that ID could not be found'});
        res.json(deletedShow);
    }   catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    index,
    show,
    create,
    destroy,
}