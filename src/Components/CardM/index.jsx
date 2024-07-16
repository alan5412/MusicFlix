import {Stack ,Card, CardBody, Button,Image, Heading, ButtonGroup } from "@chakra-ui/react";
import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";

//ya quedo mai :)
const CardM =({title,image, onDelete, videoUrl, onEdit})=>{

    const handleVideoRedirect = () => {
        window.open(videoUrl, '_blank');
      };

    return(
        <Card bg='gray.800' width='200px'  color='teal.50'  >
            <CardBody padding={0} >
                <Image
                    objectFit='cover'
                    src={image}  
                    borderRadius='md'
                    width={200}
                    height={150}
                />
                <Stack padding={2}>
                    <Heading alignSelf='center' size='md' >{title}</Heading>
                </Stack>
            </CardBody>

            <ButtonGroup alignSelf='flex-end' p={2} spacing={2}>
                <Button onClick={handleVideoRedirect} borderRadius='50%' size='sm' padding={0} colorScheme='teal' > <ViewIcon/></Button>
                <Button onClick={onDelete} borderRadius='50%' size='sm' padding={0} colorScheme='teal' ><DeleteIcon/> </Button>
                <Button onClick={onEdit} borderRadius='50%' size='sm' padding={0} colorScheme='teal' > <EditIcon/></Button>
            </ButtonGroup>
        </Card>
    )

}

export default CardM


