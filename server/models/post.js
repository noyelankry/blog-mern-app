import mongoose from 'mongoose'

const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    chefLevel: {
        type: String,
    },
    estimatedPreparationTime: {
        type: String,
    },
    ingredients: {
        type: String,
    },
}, {
    timestamps: true,
})

export default mongoose.model('Post', postSchema)