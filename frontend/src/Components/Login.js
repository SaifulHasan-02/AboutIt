import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';

const Login = () => {
    const navigate = useNavigate();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const login = async (event) => {
        event.preventDefault();

        const res = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })
        let data = await res.json();
        if(data.status === 404 | !data){
            window.alert("Invalid Credentials")
            console.log("Invalid Credentials")
        }else{
            window.alert("Login Successfull");
            console.log("Login Successfull");
            navigate('/');
        }
    }
    

    return (
        <>
          <form method='POST'>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e)=>{setEmail(e.target.value)}} aria-describedby="emailHelp" />
                </div>
                
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <br></br>
                <button type="submit" onClick={login}className="btn btn-primary">Submit</button> 
                
         </form>
           
        </>
    )
}

export default Login
