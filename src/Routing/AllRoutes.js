import {Routes , Route} from "react-router-dom";
import Home from "../Screens/Home";
import About from "../Screens/About";
import Navbar from "../Layout/Navbar";


function AllRoutes(){

    return(
        <>

        <Navbar/>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>

        </>

    )

}

export default AllRoutes;