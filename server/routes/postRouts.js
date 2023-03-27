import express from "express";
import { getPosts, createPost, updatePost, getOnePost, deletePost } from '../controllers/postControllers.js';

const router = express();

router.get('/', getOnePost );
router.get('/all', getPosts );
router.post('/create', createPost );
router.patch('/:id', updatePost );

export default router;