// src/Components/EditSongModal.jsx
import React, { useState, useEffect, useContext } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select
} from '@chakra-ui/react';
import { BandContext } from "Components/Context/BandContext"

const EditSongModal = ({ isOpen, onClose, song, bandName }) => {
  const { updateSong, bands } = useContext(BandContext);
  const [formData, setFormData] = useState({
    name: '',
    album: '',
    imageUrl: '',
    videoUrl: '',
    band: ''
  });

  useEffect(() => {
    if (song) {
      setFormData({
        name: song.name,
        album: song.album,
        imageUrl: song.imageUrl,
        videoUrl: song.videoUrl,
        band: bandName
      });
    }
  }, [song, bandName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSong(bandName, song.name, formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent bg='#1a1a1a' color='teal.50' >
        <ModalHeader>Edit Song</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" value={formData.name} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Album</FormLabel>
            <Input type="text" name="album" value={formData.album} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Image URL</FormLabel>
            <Input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Video URL</FormLabel>
            <Input type="text" name="videoUrl" value={formData.videoUrl} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Band</FormLabel>
            <Select name="band" value={formData.band} onChange={handleChange}>
              {bands.map(band => (
                <option style={{color:'teal'}} key={band.name} value={band.name}>{band.name}</option>
              ))}
            </Select>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={handleSubmit}>
            Save Changes
          </Button>
          <Button variant="ghost" colorScheme='teal' onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditSongModal;