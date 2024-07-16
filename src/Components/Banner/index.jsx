import { Flex, Box, Image, Text, Heading, Wrap} from "@chakra-ui/react"
import data from '../../Data/db.json';


const Banner =()=>{
    const getRandomIndex = (max) => {
        return Math.floor(Math.random() * max);
      };
    
      // Obtener un índice aleatorio para seleccionar una banda y una canción
      const randomBandIndex = getRandomIndex(data.bands.length);
      const randomSongIndex = getRandomIndex(data.bands[randomBandIndex].songs.length);
      const randomSong = data.bands[randomBandIndex].songs[randomSongIndex];


        return(
            <Flex maxHeight='20%'gap={10} alignItems='center' p={12} sx={{background:`linear-gradient(rgba(26, 26, 26, 1), rgba(26, 26, 26, 0.5)), url(${randomSong.imageUrl})`,  backgroundSize: 'cover', backgroundPosition: 'center',}}>
                <Box display='flex' alignItems='center' justifyContent='flex-end' width='50%' justifySelf='center'>
                    <Image
                        src={randomSong.imageUrl}
                        maxHeight='200px'
                        maxWidth='200px'

                        borderRadius='20px'
                        objectFit='cover'
                    />
                </Box>
                
                <Box width='50%' alignSelf='center' justifySelf='center'>
                    <Heading fontSize='lg' color='white'>{randomSong.name}</Heading>
                    <Text fontSize='lg' color='white'> {randomSong.album}-{randomSong.band}</Text>
                </Box>
            </Flex>
        )

}

export default Banner