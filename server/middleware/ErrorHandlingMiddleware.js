const ApiError = require('../error/ApiError')

module.exports = function (err, req, res, next) {
    if(err instanceof ApiError) {
        res.status(err.status).send({message: err.message})
    }
    return res.status(500).send({message: "Непредвиденная ошибка!"})
}