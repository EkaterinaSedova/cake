const sequelize = require("../db")
const {DataTypes} = require('sequelize')

const User = sequelize.define( 'user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequelize.define( 'basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Basket_item = sequelize.define( 'basket_item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Cake = sequelize.define( 'cake', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING}
})

const Biscuit = sequelize.define('biscuit', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Filling = sequelize.define('filling', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    description: {type: DataTypes.STRING, unique: true, allowNull: false},
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(Basket_item)
Basket_item.belongsTo(Basket)

Biscuit.hasMany(Cake)
Cake.belongsTo(Biscuit)

Filling.hasMany(Cake)
Cake.belongsTo(Filling)

Cake.hasMany(Basket_item)
Basket_item.belongsTo(Cake)

module.exports = {
    User,
    Basket,
    Basket_item,
    Cake,
    Biscuit,
    Filling,
}
