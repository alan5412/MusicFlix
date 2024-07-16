import { Box, Heading, SimpleGrid, Stack, Text, FormLabel, Input, Select, Divider, Button} from "@chakra-ui/react"
import data from "../../Data/db.json"
import { useContext, useState } from "react"
import { BandContext } from "Components/Context/BandContext"
import styled from "@emotion/styled"


const FormEstilizado = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
`




const NewVideo = ()=>{
    
    const {addSong}=useContext(BandContext)
    const [song, setSong] = useState({
        name: '',
        album: '',
        imageUrl: '',
        videoUrl: '',
        band: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setSong({ ...song, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        addSong(song);
        setSong({
          name: '',
          album: '',
          imageUrl: '',
          videoUrl: '',
          band: ''
        });
      };
    

    
    
    
    
    return(
        <Box bg='#1a1a1a'>

        <Box bg='#1a1a1a' paddingY={130} >
            <Stack color='teal.50' textAlign='center'>
                <Heading> NUEVA CANCIÓN</Heading>
                <Text> COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE CANCIÓN </Text>
                <Divider marginTop={10} alignSelf='center' width='70%' ></Divider>
                <Heading size='md'>Crear Tarjeta</Heading>
                <Divider marginBottom={10} alignSelf='center' width='70%' ></Divider>
            </Stack>

            <FormEstilizado onSubmit={handleSubmit}   >
                <SimpleGrid color='teal.50' spacing={5} focusBorderColor='teal.500' marginBottom={10} width='50%' templateColumns='repeat(auto-fill, minmax(300px, 1fr))'justifyContent='center' alignItems='center' >
                    <Box width='100%'>
                        <FormLabel>Nombre</FormLabel>
                        <Input onChange={handleChange} name="name" value={song.name} focusBorderColor='teal.500' type='Text' placeholder="Nombre de la cancion" required /> 
                    </Box>
                    <Box width='100%'>
                        <FormLabel>Banda o Artista</FormLabel>
                        <Select name="band" value={song.band} onChange={handleChange} color='gray.300' focusBorderColor='teal.500' placeholder="Seleccione banda o artista" _placeholder={{backgroundColor:'#ffff'}} >
                        {data.bands.map(band =>(
                            <option key={band.name} style={{color:'teal'}} >{band.name}</option>
                        ))}
                        
                        </Select> 
                            
                    </Box>
                    <Box width='100%'>
                        <FormLabel>Imagen </FormLabel>
                        <Input onChange={handleChange} name="imageUrl" value={song.imageUrl} focusBorderColor='teal.500' type='Text' placeholder="Url de la imagen" required/>
                    </Box >
                    <Box width='100%'>
                        <FormLabel>Video</FormLabel>
                        <Input onChange={handleChange} name="videoUrl" value={song.videoUrl} focusBorderColor='teal.500' type='Text' placeholder="Url del video" required />
                    </Box>
                    <Box width='100%'>
                        <FormLabel>Albúm</FormLabel>
                        <Input onChange={handleChange} name="album" value={song.album} focusBorderColor='teal.500' type='Text' placeholder="Nombre del Albúm" required />
                    </Box>
                     
                    <Box  marginTop={8} >
                        <Stack direction='row'>

                            <Button type="submit" colorScheme='teal' >Enviar</Button>
                            <Button colorScheme='teal'>Limpiar</Button>
                        </Stack>
                    </Box>
                </SimpleGrid>

            </FormEstilizado>
        </Box>
        </Box>
            
    )

}

export default NewVideo