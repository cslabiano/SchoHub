const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;

const Residents = require("../models/residents");

// get all
router.get('/', (req, res) => {
    Residents.find().then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log('error: ', err);
    });
});

// get specific
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.status(404).json({error: 'invalid id'});
    else {
        Residents.findById(req.params.id).then((data) => {
            if (data) res.send(data);
            else res.sendStatus(404).json({error: 'no record with the given id'});
        }).catch((err) => {
            console.log('error: ', err);
        });
    }
});

// create
router.post('/', (req, res) => {
    Residents.create(req.body).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        console.log('error: ', err);
    });
});

// update
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.status(404).json({error: 'invalid id'});
    else {
        Residents.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((data) => {
            if (data) res.send(data);
            else res.sendStatus(404).json({error: 'no record with the given id'});
        }).catch((err) => {
            console.log('error: ', err);
        });
    }
});

// delete
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.status(404).json({error: 'invalid id'});
    else {
        Residents.findByIdAndDelete(req.params.id).then((data) => {
            if (data) res.send(data);
            else res.sendStatus(404).json({error: 'no record with the given id'});
        }).catch((err) => {
            console.log('error: ', err);
        });
    }
});

module.exports = router;