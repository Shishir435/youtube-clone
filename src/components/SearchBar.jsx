import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        overflow: 'scroll',
        display: {xs: 'flex', sm: 'flex',md:'flex'},
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: '2px',
        boxShadow: "none",
        mr: { xs: '5px',sm: '5px' },
        ml: {xs: '5px',sm: '5px'}
      }}
    > 
      
      <input
        
        className="search-bar"
        placeholder="Search.."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "red" }}
        aria-label="search"
      >
      <Search />
      </IconButton>
    
    </Paper>
  );
}

export default SearchBar;
