import { Box, Heading, SimpleGrid, Highlight} from "@chakra-ui/react"
import CardM from "Components/CardM"
import { BandContext } from "Components/Context/BandContext"
import { useContext, useState } from "react"

import EditSongModal from "Components/Modal"

const MyMusic = ()=>{
    const {bands, deleteSong} = useContext(BandContext);
    //Solo lo del modal
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentSong, setCurrentSong] = useState(null);
    const [currentBand, setCurrentBand] = useState(null);

    const openModal = (bandName, song) => {
        setCurrentBand(bandName);
        setCurrentSong(song);
        setModalIsOpen(true);
      };
    
      const closeModal = () => {
        setModalIsOpen(false);
        setCurrentSong(null);
        setCurrentBand(null);
      };





    return(
        <Box bg='#1a1a1a' padding={12}>
             {bands.map(band =>(
                <Box marginX='15%' justifyContent='center' key={band.name}>
                    <Heading size='lg' textAlign='left' marginY='4' color='teal.50' >
                        <Highlight 
                        query={band.name}
                        styles={{ px: '3', py: '1', rounded: 'full', bg: 'gray.800', color:'teal.50'}}
                        >

                        {band.name}
                        </Highlight>
                        
                        </Heading>
                   
                   
                   
                   
                    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'justifyItems='center'  bg='#1a1a1a' >
                        {band.songs.map(song=>(
                            <CardM align='center' videoUrl={song.videoUrl} key={song.name} title={song.name} image={song.imageUrl} onDelete={() => deleteSong(band.name, song.name)}  onEdit={() => openModal(band.name, song)} />
                        ))}
                    </SimpleGrid>
                
                   


                </Box>
             ))}   

            {/* modal */}
            {currentSong && (
                <EditSongModal
                isOpen={modalIsOpen}
                onClose={closeModal}
                song={currentSong}
                bandName={currentBand}
                />
            )}


        </Box>



    )

}

export default MyMusic