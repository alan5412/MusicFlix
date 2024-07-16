import Banner from "Components/Banner/index"
import MyMusic from "Components/MyMusic"
import { Box, ChakraProvider, Wrap } from "@chakra-ui/react"
import { useContext, useState } from "react"
import data from "../../Data/db.json"
import NewVideo from "../../Pages/NewVideo"
import { BandContext } from "Components/Context/BandContext"


const Inicio =()=>{
   const {bands} = useContext(BandContext);
      
    return(
       
            <ChakraProvider>
                <div> 
                    <Banner/>
                    <MyMusic bands={bands}/>
                </div>
            </ChakraProvider>
       
    )

}

export default Inicio