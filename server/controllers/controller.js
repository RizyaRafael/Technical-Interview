const { comparePass } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')
const {User, About, Picture} = require('../models/index')
class Controller{
    static async login (req, res, next) {
        try {
            const {email, password} = req.body
            if (!email || !password) {
                throw {name: "EMPTY_EMAIL_PASSWORD"}
            }
            const findUser = await User.findOne({where: {Email:email}})
            if (!findUser) {
                throw {name: "INVALID_LOGIN"}
            }
            const checkPass = comparePass(password, findUser.password)
            if (!checkPass) {
                throw {name: "INVALID_LOGIN"}
            }
            const access_token = signToken({id: findUser.id})
            res.status(200).json({access_token})
        } catch (error) {   
            next(error)
        }
    }
    static async get_about (req, res, next) {
        try {
            const data = await About.findAll()
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
    static async get_picture (req, res, next) {
        try {
            const data = await Picture.findAll()
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
}
module.exports = Controller