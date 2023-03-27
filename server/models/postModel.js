import mongoose from "mongoose";

const postScema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createAt: {
        type: Date,
        default: new Date()
    }
})

const postModel = new mongoose.model('post', postScema);

export default postModel;