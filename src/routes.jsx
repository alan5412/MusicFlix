import NewVideo from "./Pages/NewVideo"
import Inicio from "./Pages/Inicio"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "Components/Header/Header"
import { ChakraProvider } from "@chakra-ui/react"
import Footer from "Components/Footer"
import { BandProvider } from "Components/Context/BandContext"


const AppRoutes =()=>{
    return(
        <BrowserRouter>
            <ChakraProvider>
             <Header/>
                <Routes>
                    <Route path="/" element={<Inicio/>}></Route>
                    <Route path="/newVideo" element={<NewVideo/>}></Route>
                </Routes>
              <Footer></Footer>  
            </ChakraProvider>
        </BrowserRouter>

    )

}

export default AppRoutes