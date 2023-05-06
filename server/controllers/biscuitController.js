const {Biscuit, Filling} = require('../models/models')
const ApiError = require('../error/ApiError')
class BiscuitController {
    async create(req, res) {
        console.log(req.body)
        const {type} = req.body
        const biscuit = await Biscuit.create({type})
        return res.send(biscuit)
    }

    async getAll (req, res) {
        const biscuit = await Biscuit.findAll()
        return res.send(biscuit)
    }
}

module.exports = new BiscuitController()