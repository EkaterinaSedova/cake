const {Cake, Filling} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')
class CakeController {
    async create(req, res, next) {
        try {
            console.log(req.body)
            const {name, price, description, biscuitId, fillingId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const cake = await Cake.create({name, price, img: fileName, description, biscuitId, fillingId})
            return res.send(cake)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll (req, res) {
        let {biscuitId, fillingId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let cakes
        if(!biscuitId && !fillingId) {
            cakes = await Cake.findAndCountAll({limit, offset})
        }
        if(!biscuitId && fillingId) {
            cakes = await Cake.findAndCountAll({where:{fillingId}, limit, offset})
        }
        if(biscuitId && !fillingId) {
            cakes = await Cake.findAndCountAll({where:{biscuitId}, limit, offset})
        }
        if(biscuitId && fillingId) {
            cakes = await Cake.findAndCountAll({where:{biscuitId, fillingId}, limit, offset})
        }
        return res.send(cakes)
    }

    async getOne (req, res) {
        const {id} = req.params
        const cake = await Cake.findOne(
            {
                where: {id},
            }
        )
        return res.send(cake)
    }
    async deleteOne (req, res) {
        const {id} = req.params
        const cake = await Cake.destroy({where: {id}})
        if(!cake) {
            return  res.status(404).send({message: "Начинка не найдена."})
        }
        return res.send({message:"Удалено."})
    }
}

module.exports = new CakeController()