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
        console.log()
        console.log('>>>>>>>>>>>>>')
        console.log(JSON.stringify(data.status))
        console.log('>>>>>>>>>>>>>')
        if(data.status==202){
            window.alert("Login Successfull");
            console.log("Login Successfull");
            navigate('/');
        }else{
            window.alert("Invalid Credentials")
            console.log("Invalid Credentials")
        }
    }
    

    return (
        <>
        <div className='login-form-container'>
          <form method='POST'>
               <h1 className="form-group">Enter login credentials</h1>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" value={email.email} onChange={(e)=>{setEmail(e.target.value)}} aria-describedby="emailHelp" />
                </div>
                
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" value={password.password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                
                <button type="submit" onClick={login}className="btn btn-primary" id="btn">Submit</button> 
                
          </form>
         </div>
           
        </>
    )
}

export default Login
