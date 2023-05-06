const {Filling, User} = require('../models/models')
const ApiError = require('../error/ApiError')
class FillingController {
    async create(req, res) {
        console.log(req.query);
        const {description} = req.body
        const filling = await Filling.create({description})
        return res.send(filling)
    }

    async getAll (req, res) {
        const filling = await Filling.findAll()
        return res.send(filling)
    }

    async deleteOne (req, res) {
        const {description} = req.params
        const filling = await Filling.destroy({where: {description}})
        if(!filling) {
            return  res.status(404).send({message: "Начинка не найдена."})
        }
        return res.send({message:"Удалено."})
    }
}

module.exports = new FillingController()