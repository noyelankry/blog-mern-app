import User from '../models/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from "../config/config"

const salt = bcrypt.genSaltSync(10)

const secret = config.jwt.secret

export const register = async (req, res) => {
    const { username, email, password } = req.body

    try {
        const userData = await User.create({
            username: username.toLowerCase(),
            email: email.toLowerCase(),
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
    const userData = await User.findOne({
        $or: [
            { email: username.toLowerCase() },
            { username: username.toLowerCase() }
        ]
    })

    if (userData) {
        const isPasswordOk = bcrypt.compareSync(password, userData.password)
        if (isPasswordOk) {
            jwt.sign({
                username: userData.username,
                email: userData.email,
                id: userData._id
            }, secret, { expiresIn: '7d' }, (err, token) => {
                if (err) throw err
                res.cookie('token', token).json({
                    id: userData._id,
                    username
                })
            })
        }
        else {
            res.status(400).json('Wrong username or password')
        }
    }
    else {
        res.status(400).json('Wrong username or password')
    }
}

export const logout = async (req, res) => {
    res.cookie('token', '').json('ok')
}

export const profile = (req, res) => {
    const { token } = req.cookies
    if (token) {
        jwt.verify(token, secret, {}, (err, info) => {
            if (err) throw err
            res.json(info)
        })
    }
}