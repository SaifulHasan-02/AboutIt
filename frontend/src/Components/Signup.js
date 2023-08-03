import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "", work: "", phone: "", email: "", password: "", confirmpassword: ""
    })
    let name, value;
    const handleInput = (event) => {
        console.log("handle")
        name = event.target.name;
        value = event.target.value;

        setUser({...user, [name]:value})
    }
    const submitData = async (event) => {
        event.preventDefault();

        const{name, work, phone, email, password, confirmpassword} = user;

        const response = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, work, phone, email, password, confirmpassword
            })
        })
        const data = await response.json();
        if(data.status === 402 | !data){
            window.alert("Invalid Registration")
            console.log("Invalid Registration")
        }else{
            window.alert("Registration Successful")
            console.log("Registration Successful")
            navigate("/login");
        }
    }

    return (
        <>
            <form method="POST">
                <div className="form-container">
                    <h1 className='form-group-title'>Signup</h1>
                    <div className="form-group">
                        <label for="inputName">Name</label>
                        <input type="text" name="name" className="form-control" id="inputName" value={user.name} onChange={handleInput} />
                    </div>
                    <div className="form-group">
                        <label for="inputWork">Work</label>
                        <input type="text" name="work" className="form-control" id="inputWork" value={user.work} onChange={handleInput} />
                    </div>
                    <div className="form-group">
                        <label for="inputPhone">Mobile Number</label>
                        <input type="text" name="phone" className="form-control" id="inputPhone" value={user.phone} onChange={handleInput} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={user.email} onChange={handleInput} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" name="password" className="form-control" id="exampleInputPassword1" value={user.password} onChange={handleInput} />
                    </div>
                    <div className="form-group">
                        <label for="inputConfirmPassword">Confirm Password</label>
                        <input type="password" name="confirmpassword" className="form-control" id="inputConfirmPassword4" value={user.confirmpassword} onChange={handleInput} />
                    </div>
                    <button type="submit" className="btn btn-primary" id="btn" onClick={submitData}>Register</button>
                </div>
            </form>
        </>
    )
}

export default Signup
