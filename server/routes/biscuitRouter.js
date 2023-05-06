const Router = require('express')
const router = new Router()
const biscuitController = require('../controllers/biscuitController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole("ADMIN"), biscuitController.create)
router.get('/', biscuitController.getAll)

module.exports = router