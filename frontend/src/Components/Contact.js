import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const[client, setClient] = useState({
    name: "", phone:"", email:""
  })

  let name, value;
  const handleInput = (event) => {
      name = event.target.name;
      value = event.target.value;
      setClient({...client, [name]:value})
  }
  const submitData = ()=>{
    window.alert("Request Send")
  }
  return (
    <>
      <form method="POST">
                <div className="form-container">
                    <h1 className='form-group-title'>Contact <span className='span'>Us</span></h1>
                    <div className="form-group">
                        <label for="inputName">Name</label>
                        <input type="text" name="name" className="form-control" id="inputName" required value={client.name} onChange={handleInput} />
                    </div>
                    
                    <div className="form-group">
                        <label for="inputPhone">Mobile Number</label>
                        <input type="text" name="phone" className="form-control" id="inputPhone" required value={client.phone} onChange={handleInput} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" className="form-control" id="exampleInputEmail1" required  value={client.email} onChange={handleInput} />
                    </div>
                    <div className="form-group">
                      <label for="exampleInputDescription">Message</label><br></br>
                      <textarea type="text" name="text" className="form-control" id="xampleInputDescription" required aria-describedby="emailHelp" rows="4" cols="50" value={client.text} onChange={handleInput} ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" id="btn" onClick={submitData}>Contact</button>
                </div>
                <hr className='hori-line'></hr>

                  <div className="rows">
                      <div className="cols">
                        <a href="saiful.hasan9197@gmail.com"><img src='https://freepngimg.com/save/152553-black-gmail-free-transparent-image-hd/512x512' className='logo-item' alt="logo"/></a>
                      </div>
                      <div className='cols'>
                          <a href="https://github.com/SaifulHasan-02"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" className='logo-item' alt="logo"/></a>
                      </div>
                      <div className='cols'>
                          <a href="https://www.linkedin.com/in/md-saiful-hasan/"><img src='https://cdn3.iconfinder.com/data/icons/social-media-black-white-1/1024/linkedin-512.png' className='logo-item' alt="logo"/></a>
                      </div>
                  </div>
                  <div className='right-container'><p className='right-title'>All of the right reserved</p></div>
      </form>
      
    </>
  )
}

export default Contact
