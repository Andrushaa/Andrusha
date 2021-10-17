import React, {useState, useEffect} from 'react';
import MyInput from "../input/MyInput";
import MyButton from "../button/myButton";


const PostForm = ({create}) => {
    const [post, setPost] = useState({name: '', email:'', body:''})

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [body, setBody] = useState('')
    const [nameDirty, setNameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [commentDirty, setCommentDirty] = useState(false)
    const [nameError, setNameError] = useState('Имя не может быть пустым')
    const [emailError, setEmailError] = useState('Емаил не может быть пустым')
    const [commentError, setCommentError] = useState('Введите свой комментарий')
    const [formValid, setFormValid] = useState(false)


    useEffect(() => {
        if (nameError || emailError || commentError) {
            setFormValid(false)
        }
        else {
            setFormValid(true)
        }
    }, [nameError, emailError, commentError])

    const nameHandler = (e) => {
        setName(e.target.value)
        setPost({...post, name: e.target.value})
        const reName =/^[a-z]{3,10}$/;

        if (!reName.test(String(name).toLowerCase())) {
            setNameError("Введите имя латинскими буквами. От 4 до 9 символов")
        } else {
            setNameError('')
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        setPost({...post, email: e.target.value})
        const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!reEmail.test(String(email).toLowerCase())) {
            setEmailError("Некорректный email")
        } else {
            setEmailError('')
        }
    }

    const commentHandler = (e) => {
        setBody(e.target.value)
        setPost({...post, body: e.target.value})
        const reComment = /^[a-z0-9_-]{8,21}$/;

        if (!reComment.test(String(body).toLowerCase())) {
            setCommentError("Комментарий может содержать латингские буквы и цифры")
        } else {
            setCommentError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case "body":
                setCommentDirty(true)
                break
        }
    }


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
            <p>
                {(nameDirty && nameError) && <div style={{color: 'red'}}>{nameError}</div>}
                <MyInput
                    value={name}
                    onChange={e => nameHandler(e)}
                    type="text"
                    name='name'
                    onBlur={e => blurHandler(e)}
                    placeholder="Enter your name"
                />
            </p>

            <p>
                {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                <MyInput
                    value={email}
                    onChange={e => emailHandler(e)}
                    onBlur={e => blurHandler(e)}
                    name='email'
                    type="email"
                    placeholder="Enter your email"
                />
            </p>

           <p>
               {(commentDirty && commentError) && <div style={{color: 'red'}}> {commentError}</div>}
               <MyInput
                   value={body}
                   onChange={e => commentHandler(e)}
                   onBlur={e => blurHandler(e)}
                   type="text"
                   name='body'
                   placeholder="Your comment text"
               />
           </p>
            <MyButton disabled={!formValid} onClick={addNewPost}>Create</MyButton>
        </form>
    );
};

export default PostForm;