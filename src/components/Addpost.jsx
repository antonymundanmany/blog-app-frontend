import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Addpost = () => {
    const [input,setinput]=useState(
        {
            "userId":sessionStorage.getItem("userid"),
            "post":""
        }
    )
    const inputHandler=(event)=>{
        setinput({...input,[event.target.name]:event.target.value})
    }
    const readvalues=()=>{
        console.log(input)
        axios.post("http://172.16.185.26:3000/api/posts/add",input).then(
            (Response)=>{
                console.log(Response.data)
                if (Response.data.status=="success") {
                    alert("Successfully posted")
                    setinput(
                        {
                            "userId":"",
                            "post":""
                        }
                    )
                } else {
                    alert("Something went wrong")
                }
            }
        )
    }
  return (
    <div>
        <Navbar/>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Post</label>
                            <input type="text" className="form-control" name='post' value={input.post} onChange={inputHandler}/>
                            
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-info" onClick={readvalues}>SUBMIT</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Addpost