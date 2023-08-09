import User from '../models/user.js'

export const register = async (req, res) => {
    const { username, password } = req.body

    try {
        const userData = await User.create({ username, password })
        res.json(userData)
    }
    catch (e) {
        res.status(400).json(e)
    }

}

export const login = (req, res) => {

}