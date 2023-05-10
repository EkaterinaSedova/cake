const Router = require('express')
const router = new Router()
const biscuitController = require('../controllers/biscuitController')
const checkRole = require('../middleware/checkRoleMiddleware')
const fillingController = require("../controllers/fillingController");

router.post('/', checkRole("ADMIN"), biscuitController.create)
router.get('/', biscuitController.getAll)
router.delete('/:type', biscuitController.deleteOne)

module.exports = router