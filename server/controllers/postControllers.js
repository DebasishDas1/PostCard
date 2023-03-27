import mongoose from "mongoose";
import postModel from "../models/postModel.js";

const createPost = async (req, res) => {
    const postData = req.body;

    const newPost = new postModel(postData);
    try {
        newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message  });
        
    }
}

const getPosts = async (req, res) => {
    try {
        const postMessage = await postModel.find();

        res.status(200).json(postMessage)
    } catch (error) {
        res.status(404).json({ message: error.message });        
    }
}

const getOnePost = async (req, res) => {
    const { id : _id } = req.params;

    try {
        if( !mongoose.Types.ObjectId.isValid(_id) ) 
            return res.status(404).send('No post with that id');

        const searchedPost = await postModel.findById( id );

        res.json( searchedPost );
    } catch (error) {
        
    }    
}

const updatePost = async (req, res) => {
    const { id : _id } = req.params;
    const { post } = req.body;

    try {
        if( !mongoose.Types.ObjectId.isValid(_id) ) 
            return res.status(404).send('No post with that id');

        const updatedPost = await postModel.findByIdAndUpdate(_id, post, {new: true}  );

        res.json( updatedPost );
    } catch (error) {
        
    }    
}

const deletePost = async (req, res) => {
    const { id : _id } = req.params;

    try {
        if( !mongoose.Types.ObjectId.isValid(_id) ) 
            return res.status(404).send('No post with that id');

        const updatedPost = await postModel.findByIdAndDelete(_id);

        res.json( updatedPost );
    } catch (error) {
        
    }    
}

export { getPosts, createPost, updatePost, getOnePost, deletePost };