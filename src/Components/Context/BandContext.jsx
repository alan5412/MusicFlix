import React, { createContext, useState } from 'react';
import data from '../../Data/db.json';

// Creación del contexto para bandas
export const BandContext = createContext();

// Proveedor del contexto que envolverá la aplicación
export const BandProvider = ({ children }) => {
 
 
  // Estado inicial de bandas y canciones
  const [bands, setBands] = useState(data.bands);


   // Función para agregar una nueva canción
  const addSong = (newSong) => {
    setBands(prevBands => { // Mapear sobre las bandas para encontrar la banda correcta
      const bandExists = prevBands.some(band => band.name === newSong.band);

      if (bandExists) {
        return prevBands.map(band => {
          if (band.name === newSong.band) {
            return {
              ...band,
              songs: [...band.songs, newSong]
            };
          }
          return band;
        });
      } else {
        return [...prevBands, { name: newSong.band, songs: [newSong] }];
      }
    });
  };

 // Función para eliminar una canción existente
  const deleteSong = (bandName, songName) => {
    setBands(prevBands => {
      return prevBands.map(band => {
        if (band.name === bandName) {
          return {
            ...band,
            songs: band.songs.filter(song => song.name !== songName)
          };
        }
        return band;
      });
    });
  };


  // Función para actualizar una canción existente
  const updateSong = (bandName, songName, updatedSong) => {
    setBands((prevBands) => {
       // Mapear sobre las bandas para encontrar la banda correcta
      const newBands = prevBands.map((band) => {
        if (band.name === bandName) {
          return {
            // Filtrar la canción que necesita ser actualizada
            ...band,
            songs: band.songs.filter((song) => song.name !== songName),
          };
        }
        return band;
      });
    
      // Encontrar el índice de la banda objetivo
      const targetBandIndex = newBands.findIndex(band => band.name === updatedSong.band);
      if (targetBandIndex !== -1) {
        newBands[targetBandIndex].songs.push(updatedSong);
      } else {
        newBands.push({
          name: updatedSong.band,
          songs: [updatedSong],
        });
      }

      return newBands;
    });
  };

  return (
    <BandContext.Provider value={{ bands, addSong, deleteSong, updateSong }}>
      {children}
    </BandContext.Provider>
  );
};