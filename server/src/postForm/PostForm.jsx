import React, {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import MyInput from "../input/MyInput";
import MyButton from "../button/myButton";
import "./postForm.css"


const PostForm = ({create}) => {
 //   const [post, setPost] = useState({name: '', email:'', body:''})
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
    } = useForm();

    const onSubmit = (post) => {
        console.log(post);
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        reset();
    };


    return (
        <div className="form-Wrapper">
            <h1 className="form-Title">New comment</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-item">
                    <label className="form-item__title">Name:</label>
                    <input
                        type="text"
                        {...register("name", { required: "Name is Required",
                            minLength: {
                                value: 3,
                                message: "Minimum 3 characters",
                            },
                            maxLength: {
                                value: 14,
                                message: "Maximum 14 characters",
                            }
                        })}

                        onKeyUp={() => {
                            trigger("name");
                        }}
                    />
                    {errors.name && (
                        <small className="errors-Body">{errors.name.message}</small>
                    )}
                </div>

                <div className="form-item">
                    <label className="form-item__title">Email:</label>
                    <input
                        type="email"

                        {...register("email", { required: "Email is Required" ,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            }})}
                        onKeyUp={() => {
                            trigger("email");
                        }}
                    />
                    {errors.email && (
                        <small className="errors-Body">{errors.email.message}</small>
                    )}
                </div>

                <div className="form-item">
                    <label className="form-item__title">Message:</label>
                    <input
                        type="text"
                        {...register("body", { required: "Message is Required",
                            minLength: {
                                value: 10,
                                message: "Minimum 10 characters",
                            },
                            maxLength: {
                                value: 50,
                                message: "Maximum 50 characters",
                            }
                        })}
                        onKeyUp={() => {
                            trigger("body");
                        }}
                    />
                    {errors.body && (
                        <small className="errors-Body">{errors.body.message}</small>
                    )}
                </div>

                <input
                    type="submit"
                    className="MyButton"
                    value="Send message"
                />
            </form>

        </div>
    );
}

export default PostForm;