import React, { useState } from 'react';
import Navbar from './components/Navbar.js';
import CharacterGrid from './components/CharacterGrid';
import Footer from './components/Footer.js';
import characters from './data/characters.json';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState(''); //Almacena la busqueda realizada
  const [activeCharacterId, setActiveCharacterId] = useState(null); //Almacena el personaje seleccionado

  const handleCharacterClick = (character) => {
    //Accion cuando pulsan sobre una CharacterCard
    if (character.transformations.length > 0 && (activeCharacterId == null || activeCharacterId === character.id)) {
      //Debe tener transformaciones, no haber ningun otro personaje seleccionado o ser el personaje seleccionado
      const isActive = activeCharacterId === character.id;
      //Invierte el estado actual para el personaje
      setActiveCharacterId(isActive ? null : character.id);
    }
  };
  
  //Accion cuando introducen algun texto en el campo de busqueda
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <Navbar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeCharacterId={activeCharacterId}
      />

      <CharacterGrid 
        characters={filteredCharacters}
        handleCharacterClick={handleCharacterClick}
        activeCharacterId={activeCharacterId}
      />

      <Footer/>

    </div>
  );
}

export default App;