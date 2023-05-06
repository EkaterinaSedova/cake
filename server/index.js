require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const sequelize = require("./db")
const models = require("./models/models")
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const path = require('path')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = 3458

const app = express()
app.use(cors())
app.use(fileUpload({}))
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.resolve(__dirname, 'static')))
app.use('/api', router)
app.get('/', function (req, res) {
    res.send("hui");
});

app.use(errorHandler)
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()