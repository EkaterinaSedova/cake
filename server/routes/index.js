const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const basketRouter = require('./basketRouter')
const basketItemRouter = require('./basketItemRouter')
const ratingRouter = require('./ratingRouter')
const cakeRouter = require('./cakeRouter')
const biscuitRouter = require('./biscuitRouter')
const fillingRouter = require('./fillingRouter')

router.use('/user', userRouter)
router.use('/cake', cakeRouter)
router.use('/basket', basketRouter)
router.use('/item', basketItemRouter)
router.use('/rating', ratingRouter)
router.use('/biscuit', biscuitRouter)
router.use('/filling', fillingRouter)

module.exports = router