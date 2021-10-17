import React,{useState, useEffect} from 'react'
import axios from "axios";
import "./app/app.css"
import Pages from './pages/Pages';
import Loader from "./loader/Loader";
import MyButton from "./button/myButton";
import Modal from "./modal/Modal";
import PostForm from "./postForm/PostForm";
import {useFetching} from "./hook/useFetching";


function App() {
    const [data, setData] = useState([]);
    const [modalActive, setModalActive] = useState(false)
    const [fetchPosts, postError] = useFetching(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        setData(data);
    })

    async function createPost(newPost) {
        const {data: post} = await axios.post('https://jsonplaceholder.typicode.com/comments', newPost)
        setData([...data, post])
        setModalActive(false)
    }

    useEffect(()=>{
        fetchPosts()
     },[])


    return (
        <>
            <h1 className='MainTitle'>User Posts</h1>

            <MyButton onClick={() => setModalActive(true)}>
                New commit
            </MyButton>
            <Modal active={modalActive} setActive={setModalActive}>
                <PostForm create={createPost}/>
            </Modal>
            {postError &&
                <h1 className='MainTitle'>An error has occurred ${postError}</h1>
            }
            {
                data.length > 0
                    ?<Pages data={data} />
                    :<Loader/>
            }
        </>
    )
}

export default App
