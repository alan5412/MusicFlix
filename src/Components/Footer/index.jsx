import { Flex, Text,Image } from "@chakra-ui/react"

const Footer = ()=>{
    return(
           
             <Flex direction='column' bg="#1a1a1a" justifyContent='center' padding={4} alignItems={'center'}>
                <Image
                    src="./public/logo.png"
                    width='100px'
                />
                <Text textAlign='center' color='teal.50'>Desarrolado por <a href="https://github.com/alan5412"><b>Alan Camarena</b></a> - 2024</Text>    
                <Text textAlign='center' color='teal.50'>V 1.0.0</Text>    
            </Flex>   
      

    )
}

export default Footer