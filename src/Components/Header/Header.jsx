import { Box, Stack, Text, Flex,Spacer, Image} from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import Logo from "../../../public/musicLogo.jpg"



const Header =()=>{
    return(
        <Flex justifyContent='space-between' color='White' bg='#1a1a1a' p='3' paddingX='10%' >
            <Box color='white' bg='#1a1a1a' >
                <Image
                    src={Logo}
                    width='100px'
                />
            </Box>
            
            <Stack direction='row' >
                <Button type="a"  size='sm' colorScheme='teal' ><Link to="/" >Home</Link></Button>
                <Button size='sm' colorScheme='teal' ><Link to="/newVideo" >Nuevo Video</Link></Button>
            </Stack>
        </Flex>
    )

}

export default Header