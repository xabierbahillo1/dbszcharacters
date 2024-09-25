import React from 'react';
import { Grid2 } from '@mui/material';
import CharacterCard from './CharacterCard';

const CharacterGrid = ({ characters, handleCharacterClick, activeCharacterId }) => {
  return (
    <Grid2 container spacing={2} style={{ padding: 20 }} justifyContent="center">
      {characters.map((character) => {
        const isActive = character.id === activeCharacterId;
        const isDisabled = activeCharacterId && !isActive;

        return (
          <React.Fragment key={character.id}>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
              <CharacterCard 
                character={character}
                onClick={() => handleCharacterClick(character)}
                isDisabled={isDisabled}
              />
            </Grid2>

            {/* Mostrar transformaciones si estan visibles */}
            {activeCharacterId === character.id && character.transformations.length > 0 && (
              character.transformations.map((transformation) => (
                <Grid2 item xs={12} sm={6} md={4} lg={3} key={transformation.id}>
                  <CharacterCard character={transformation} />
                </Grid2>
              ))
            )}
          </React.Fragment>
        );
      })}
    </Grid2>
  );
};

export default CharacterGrid;
