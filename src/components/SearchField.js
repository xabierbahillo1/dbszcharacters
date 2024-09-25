import React from 'react';
import { TextField} from '@mui/material';
import './SearchField.css';

const Search = ({ searchTerm, setSearchTerm, activeCharacterId }) => {
  return (
    <div>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
        disabled={activeCharacterId}
      />
    </div>
  );
};

export default Search;
