import { BrowserRouter, Route, Routes } from "react-router-dom"

import NavBar from "../layout/NavBar"
import Footer from "../layout/Footer"

// import Home from "../pages/Home"
// import Contact from "../pages/Contact"
// import Detail from "../pages/Detail"
// import Upload from "../pages/Upload"
// import Checkout from "../pages/Checkout"
// import Success from "../pages/Success"

function RouterApp() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
               
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RouterApp