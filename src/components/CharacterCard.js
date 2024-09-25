import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const CharacterCard = ({ character, onClick, isDisabled }) => {
  
  const [imgSrc, setImgSrc] = useState(character.image);

  const handleError = () => {
    //Si la imagen original deja de estar disponible, se utilizaria la imagen descargada
    setImgSrc(character.backupImage);
  };

  const hasTransformations = character.transformations && character.transformations.length > 0;  
  const hasTransformationsEnabled = hasTransformations && !isDisabled;

  return (
    <Card
      style={{
        width: '280px',
        height: '300px',
        backgroundColor: isDisabled ? '#555' : '#333',
        color: '#fff',
        cursor: hasTransformationsEnabled ? 'pointer' : 'default',
        transition: 'background-color 0.3s ease, border 0.3s ease',
        border: isDisabled ? 'none' : '2px solid transparent',
        opacity: isDisabled ? 0.5 : 1,
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (hasTransformationsEnabled) {
          e.currentTarget.style.border = '2px solid orange';
        }
        e.currentTarget.style.backgroundColor = '#444';
      }}
      onMouseLeave={(e) => {
        if (hasTransformationsEnabled) {
          e.currentTarget.style.border = '2px solid transparent';
        }
        e.currentTarget.style.backgroundColor = '#333';
      }}
    >
      <CardMedia
        component="img"
        alt={character.name}
        image={imgSrc}
        onError={handleError}
        style={{
          width: '280px',
          height: '220px',
          objectFit: 'cover',
        }}
      />
      <CardContent>
        <Typography variant="h6">{character.name}</Typography>
        {character.subname && (
          <Typography variant="body2" style={{ color: 'yellow', fontSize: '0.9rem' }}>
            {character.subname}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
