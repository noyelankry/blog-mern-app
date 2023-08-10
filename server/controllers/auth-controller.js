import User from '../models/user.js'
import bcrypt from 'bcryptjs'

const salt = bcrypt.genSaltSync(10)

export const register = async (req, res) => {
    const { username, password } = req.body

    try {
        const userData = await User.create({
            username,
            password: bcrypt.hashSync(password, salt)
        })
        res.json(userData)
    }
    catch (e) {
        res.status(400).json(e)
    }

}

export const login = async (req, res) => {
    const { username, password } = req.body

    try {
        const userData = await User.findOne({ username })
        const isPasswordOk = bcrypt.compareSync(password, userData.password)

        if (isPasswordOk) {
            // user loggeed in - token?
        }
        else {
            res.status(400).json('wrong credentials')
        }
    }
    catch (e) {

    }
}