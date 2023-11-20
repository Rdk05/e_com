import {Routes , Route} from "react-router-dom";
import Home from "../Screens/Home";
import About from "../Screens/About";
import Navbar from "../Layout/Navbar";
import ViewMore from "../Screens/ViewMore";
import MemoDemo from "../Screens/useMemo.Demo";
import CallbackDemo from "../Screens/UseCallbackDemo";
import A from '../Screens/ContextDemo';
import UseRefDemo from "../Screens/UseRefDemo";
import UseReducerDemo from "../Screens/UseReducerDemo ";


function AllRoutes(){

    return(
        <>

        <Navbar/>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/memo-demo" element={<MemoDemo/>}/>
            <Route path="/callback-demo" element={<CallbackDemo/>} />
            <Route path="/context-demo" element={<A/>}/>
            <Route path="/useRef-demo" element={<UseRefDemo/>} />
            <Route path="/useReducer-demo" element={<UseReducerDemo/>} />
            <Route path="/about" element={<About />} />
            <Route path="/viewmore/:id" element={<ViewMore/>}/>
        </Routes>

        </>

    )

}

export default AllRoutes;