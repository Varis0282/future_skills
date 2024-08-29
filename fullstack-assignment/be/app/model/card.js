import mongoose, { Schema } from 'mongoose'

const cardSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    link: {
        type: String
    }
}, { timestamps: true })

export default mongoose.model('Card', cardSchema)
