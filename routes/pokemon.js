const express = require("express")
const router = express.Router()

const pokemonController = require("../controllers/pokemon") 

router.get('/', pokemonController.index)
router.get('/:id', pokemonController.show)
router.post('/', pokemonController.create)
router.put('/:id', pokemonController.edit)
router.delete('/:id', pokemonController.delete)

module.exports = router