const Router = require('express')
const router = new Router()
const fillingController = require('../controllers/fillingController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), fillingController.create)
router.get('/', fillingController.getAll)
router.delete('/:description', checkRole('ADMIN'), fillingController.deleteOne)

module.exports = router