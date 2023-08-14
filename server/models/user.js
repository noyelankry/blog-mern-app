import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    allPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
})

export default mongoose.model('User', userSchema)