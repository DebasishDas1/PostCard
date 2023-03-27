import MyInput from '../../components/MyInput';
import MyTextarea from '../../components/MyTextarea'
import MyButton from '../../components/MyButton';
import MyFile from './MyFile';
import { createPostApi } from '../../store/postSlice';

import {useState} from 'react';
import { useDispatch } from 'react-redux'

import styles from './myForm.module.css';

const MyForm = () => {
    const dispatch = useDispatch();

    const [poatData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });

    const handelClear = () => {
        setPostData({
            title: '',
            message: '',
            creator: '',
            tags: '',
            selectedFile: '',
        });
    }

    const handerSubmit = () => {
        dispatch( createPostApi(poatData) );
        handelClear();
    }

    return (
        <div className={styles.myForm} >
            <h1>The form</h1>
            <MyInput 
                title = 'creator'
                value = {poatData.creator}
                action = { e => setPostData({ ...poatData, creator: e.target.value }) }
            />
            <MyInput 
                title = 'title'
                value = {poatData.title}
                action = { e => setPostData({ ...poatData, title: e.target.value }) }
            />
            <MyTextarea 
                title = 'message'
                value = {poatData.message}
                action = { e => setPostData({ ...poatData, message: e.target.value }) }
            />
            <MyInput 
                title = 'tags'
                value = {poatData.tags}
                action = { e => setPostData({ ...poatData, tags: e.target.value }) }
            />
            <MyFile action = { ({ base64 }) => setPostData({ ...poatData, selectedFile: base64 }) } />
            <div className={styles.myForm_button_contanner} >
                <MyButton title = 'Submit' action = {handerSubmit} />
                <MyButton title = 'Clear' action = {handelClear} />
            </div>

        </div>
    )
};

export default MyForm;