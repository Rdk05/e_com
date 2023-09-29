import {Routes , Route} from "react-router-dom";
import Login from "../Screens/Login";
import Register from "../Screens/Register";



function AuthRoutes(){

    return(
        <>

        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Login />} />
        </Routes>

        </>

    )

}

export default AuthRoutes;