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
    async deleteOne (req, res) {
        const {type} = req.params
        const biscuit = await Biscuit.destroy({where: {type}})
        if(!biscuit) {
            return  res.status(404).send({message: "Бисквит не найден."})
        }
        return res.send({message:"Удалено."})
    }
}

module.exports = new BiscuitController()