import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { getPostApi } from '../../store/postSlice';
import MyPost from './MyPost';

import styles from './posts.module.css';

const Posts = () => {
    const dispatch = useDispatch();

    const posts = useSelector( state => state.post.posts );
    const postStatus = useSelector( state => state.post.status );
    // const postError = useSelector( state => state.post.error );

    useEffect( () => {
        if(postStatus === 'idle') {
            dispatch( getPostApi() )
        }
    }, [posts, postStatus, dispatch] )

    return (
        <div className = {styles.posts} > 
            { posts.length === 0 ? 
                <CircularProgress color="secondary" /> : 
                ( posts.map( post => <MyPost key = {post._id} post={post} />) ) 
            }
        </div>
    )
};

export default Posts;