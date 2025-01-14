import React from 'react'
import { useContext, useRef } from "react";
import { Context } from "../context/Context";
import axios from "axios";
import "../style.css"

export default function StaffLogin() {
    const userRef =useRef();
    const passwordRef =useRef();
    const{user,dispatch,isFetching} = useContext(Context)

    const handleSubmit= async (e) =>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"})
        try{
        const res = await axios.post("http://localhost:5000/api/StaffAuth/login",{
            username:userRef.current.value,
            password:passwordRef.current.value,
        })
        dispatch({type:"LOGIN_SUCCESS",payload: res.data});
        }catch(err){
        dispatch({type:"LOGIN_FAILURE"});
        }
    };
    console.log(user);
    return (
        <div>
            <div className="container-fluid">


                <div className="row bg-image login-image">
                    <div className=" row bg-trans-yellow">

                        <div className="col-md-8 ">

                            <div className="pic-body">
                                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                                <div className="topic">
                                    Make a <span className="blue"> difference </span>
                                </div>
                                <div className="pic-text">
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores tempora ea ipsam. Nostrum, ut libero! Quisquam modi ducimus beatae praesentium perferendis obcaecati maiores nisi suscipit, consequuntur animi quos impedit neque!
                                    </p>
                                </div>
                            </div>

                        </div>


                        <div className="col-md-4 login-sec">
                            <div style={{height: '11vh'}}> </div>
                            <div className="card login-card">
                                <span className=" card-body">
                                    <br /><br />
                                    <span className=" card-title">
                                        Log In
                                    </span>
                                    <br /><br />
                                    <span class="card-text">
                                        <form className="loginForm" onSubmit={handleSubmit}>


                                            <div class="form group">
                                                <label for="" > Username </label>
                                                <input type="username" class="form-control" placeholder="Enter your username" ref={userRef} />

                                            </div>
                                            <div className="form group">
                                                <label for="" > Password </label>
                                                <input type="password" class="form-control" placeholder="Enter your password" ref={passwordRef}/>

                                            </div>
                                            <a href=""> Forgot Password</a>
                                            <br /> <br />
                                            <input type="submit" value="Login" class="btn btn-curved" role="button" style={{width: '100%'}} />
                                               
                                        </form>
                                    </span>
                                </span>
                            </div>


                        </div>

                    </div>


                </div>
            </div>

        </div>
    )
}