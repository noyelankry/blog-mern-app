import User from '../models/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const salt = bcrypt.genSaltSync(10)
const secret = 'dnkfF387RElf39do0f3feke3923ghvj9DFSG95ff3'

export const register = async (req, res) => {
    const { username, password } = req.body

    try {
        const userData = await User.create({
            username: username.toLowerCase(),
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
    const userData = await User.findOne({ username: username.toLowerCase() })

    if (userData) {
        const isPasswordOk = bcrypt.compareSync(password, userData.password)
        if (isPasswordOk) {
            // user loggeed in
            jwt.sign({ username, id: userData._id }, secret, { expiresIn: '7d' }, (err, token) => {
                if (err) throw err
                res.cookie('token', token).json({
                    id: userDoc._id,
                    username,
                })
            })
            res.json("logged in")
        }
        else {
            res.status(400).json('Wrong username or password')
        }
    }
    else {
        res.status(400).json('Wrong username or password')
    }
}

export const logout = async () => {

}