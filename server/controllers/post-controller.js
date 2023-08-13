import Post from "../models/post"
import jwt from "jsonwebtoken"
import fs from "fs"

const secret = 'dnkfF387RElf39do0f3feke3923ghvj9DFSG95ff3'

export const create = async (req, res) => {
    const { originalname, path } = req.file;

    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath);

    const { token } = req.cookies;
    jwt.verify(token, secret, {}, async (err, info) => {
        if (err) throw err;
        const { title, summary, content, EPT, level, ingredients } = req.body;
        const postDoc = await Post.create({
            title,
            summary,
            content,
            image: newPath,
            author: info.id,
            chefLevel: level,
            estimatedPreparationTime: EPT,
            ingredients
        })
        res.json(postDoc);
    })
}

export const displayAll = async (req, res) => {
    res.json(
        await Post.find()
            .populate('author', ['username'])
            .sort({ createdAt: -1 })
            .limit(20)
    )
}

export const display = async (req, res) => {
    const { id } = req.params
    const PostData = await Post.findById(id)
    res.json(PostData)
}