
import AllRoutes from "./Routing/AllRoutes";
import AuthRoutes from "./Routing/AuthRoutes";
import { useState } from "react";


function App(){

    const [auth, setAuth] = useState(false);

    function handleAuth(){
        setAuth(!auth);
    }

    return(

        <>
         {localStorage.getItem('auth') == 'undefined' || localStorage.getItem('auth') == null || localStorage.getItem('auth') == "" ? <AuthRoutes/> : <AllRoutes/>}

         {/* <button onClick={handleAuth}>{auth === true ? "Logout" : "Login"}</button> */}
        </>
    )
}

export default App;