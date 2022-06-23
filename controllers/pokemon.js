const Pokemon = require("../models/Pokemon")

module.exports = {
    index: (req, res) => {
        Pokemon.find()
        .then(pokemon => {
            res.json(pokemon)
        })
    },
    show: (req, res) => {
        Pokemon.findById(req.params.id)
        .then(pokemon => {
            res.json(pokemon)
        })
    },
    create: (req, res) => {
        Pokemon.create(req.body)
        .then(pokemon => {
            res.json(pokemon)
        })
    },
    edit: (req, res) => {
        Pokemon.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(pokemon => {
            res.json(pokemon)
        })
    },
    delete: (req, res) => {
        Pokemon.findByIdAndDelete(req.params.id)
        .then(pokemon => {
            res.json(pokemon)
        })
    }
}