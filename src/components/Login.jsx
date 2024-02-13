import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const [input,setInput]=new useState(
        {
            "userEmail":"",
            "password":""
        }
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readvalues=()=>{
        console.log(input)
        axios.post("http://172.16.185.26:3000/api/users/signin",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    console.log(response.data.userData._id)
                    sessionStorage.setItem("userid",response.data.userData._id)
                    navigate("/addpost")
                } 
                else if (response.data.status=="incorrect password") {
                    alert("enter correct password")
                }
                else if (response.data.status=="invalid user") {
                    alert("invalid user")
                }
                else {
                    alert("something went wrong")
                }
            }
        )
    }
  return (
    <div>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">E-mail ID</label>
                            <input type="text" className="form-control" name='userEmail' value={input.userEmail} onChange={inputHandler}/>
                            
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Password</label>
                            <input type="text" className="form-control" name='password' value={input.password} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <button className="btn btn-info" onClick={readvalues}>LOGIN</button><br></br>
                            <Link to="/register">new user. click here</Link>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Login