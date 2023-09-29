import { useState } from "react";
import "../Styles/Login.css";
import { Link } from "react-router-dom";



function Login(){

    const [values , setValues] = useState({
        email : "",
        password : "",
    })

    const handleSubmit = () => {
        if(!values.email)
        {
            alert("Please Enter Your Email");
        }
        else if(!values.password){
            alert("Please Enter Your Password");
        }
        else{
            localStorage.setItem('auth' , values.email);
            window.location.reload();
        }
    }

    const handleInput = (e) => {

        setValues({...values, [e.target.name] : e.target.value})
    }

    return(
        <>
          <div className="parent">

            <div className="Login-div card">
            <h4>Login Here</h4>
            <div className="form-group">
            <label for="email">Email address</label>
            <input type="email" onChange={handleInput} value={values.email} name="email" className="form-control" id="email" placeholder="Enter your Email" />
            </div>
            <div className="form-group">
            <label for="password">Password</label>
            <input onChange={handleInput} value={values.password} style={{width : "100%"}} type="password" name="password" className="form-control" id="password" placeholder="Enter your Password" />
            </div>
            <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
            <h5>Don't have an account ?</h5><Link to="./Register">Register Here</Link>
            </div>

          </div>
        </>
    )
}

export default Login;  