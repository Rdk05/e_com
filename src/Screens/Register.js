
import { Link } from "react-router-dom";

function Register(){

    return(
        <>
             <div className="parent">

               <div className="Login-div card">
               <h4>Register Here</h4>
               <div className="form-group">
               <label for="name">Name</label>
               <input type="text" name="name" className="form-control" id="name" placeholder="Enter your Name" />
               </div>
               <div className="form-group">
               <label for="email">Email address</label>
               <input type="email" name="email" className="form-control" id="email" placeholder="Enter your Email" />
               </div>
               <div className="form-group">
               <label for="password">Password</label>
               <input type="password" name="password" className="form-control" id="password" placeholder="Enter your Password" />
               </div>
               <button type="submit" className="btn btn-primary">Submit</button>
               <h5>Already have an account ?</h5><Link to="./Login">Login Here</Link>
               </div>

             </div>
        </>
    )
}

export default Register;