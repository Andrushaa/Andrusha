import React, {useState} from 'react';
import MyInput from "../input/MyInput";
import MyButton from "../button/myButton";


const PostForm = ({create}) => {
    const [post, setPost] = useState({name: '', email:'', body:''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        if (newPost.name !== '' && newPost.email !== '' && newPost.body !== '') {
            create(newPost)
            setPost({name: '', email:'', body:''})
        }
    }

    return (
        <form>
            <h1 className='MainTitle'>Create your comment</h1>
            <MyInput
                value={post.name}
                onChange={e => setPost({...post, name: e.target.value})}
                type="text"
                placeholder="Enter your name"
            />
            <MyInput
                value={post.email}
                onChange={e => setPost({...post, email: e.target.value})}
                type="email"
                placeholder="Enter your email"
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Your comment text"
            />
            <MyButton onClick={addNewPost}>Create</MyButton>
        </form>
    );
};

export default PostForm;