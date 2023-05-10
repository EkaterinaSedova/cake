const Router = require('express')
const router = new Router()
const cakeController = require('../controllers/cakeController')
const checkRole = require('../middleware/checkRoleMiddleware')
const fillingController = require("../controllers/fillingController");

router.post('/',checkRole("ADMIN"),cakeController.create)
router.get('/',cakeController.getAll)
router.get('/:id',cakeController.getOne)
router.delete('/:id', cakeController.deleteOne)

module.exports = router