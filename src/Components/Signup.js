import React, { useState } from "react";
import "./Signup.css";

const Signup = () =>{


    const[data,setData] = useState({email:"", password: ""});

    //change handler
    const changeHandler = (e) => {
        let name1 =e.target.name;
        let val = e.target.value;
        setData({...data, [name1]: val});
    };

    //submit handler
    const submitHandler = (e) => {
        alert("You are Signed In Successfully...😎");
    };



    return(
        <>
        <div className="d-flex justify-content-center align-items-center vh-100 bg-danger-subtle" id="b-img">
            <div className="p-5 rounded border border-2 border-dark" style={{backgroundColor:"rgb(212 183 183)"}}>
            <form onSubmit={submitHandler}>
                <h2 className="text-center">Sign Up</h2><br/>

                <div className="mb-3 px-5">
                <label htmlFor="text">UserName :  </label>
                <input type="text" placeholder="Enter your username" className="form-control  " name="Username" onChange={changeHandler}></input>
            </div>
            <div className="mb-3 px-5">
                <label htmlFor="email">Email :  </label>
                <input type="email" placeholder="Enter your email" className="form-control  " name="Email" onChange={changeHandler}></input>
            </div>
            <div className="mb-3 px-5">
                <label htmlFor="password">Password :  </label>
                <input type="password" placeholder="Enter your Password" className="form-control  " name="Password"></input>
            </div>
            <div className="mb-3 px-5">
                <label htmlFor="password">Confirm Password :  </label>
                <input type="password" placeholder="Enter your Password" className="form-control  " name="Password"></input>
            </div>
            <div className="mb-3 px-5">
                 <input type="checkbox" className="custom-contol custom-checkbox mb-3 px-5"/>
                 <label htmlFor="checkbox" className="custom-input-label ms-2">
                    Remember Me 
                 </label>
            </div>
            <div className="d-grid mb-3 px-5">
                <button className="btn btn-success" type="submit"> 
                Login
                </button>
            </div>
            </form>
            </div>
        </div>
        </>
);
}
export default Signup;