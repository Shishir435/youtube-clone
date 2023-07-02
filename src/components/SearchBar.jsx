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
        overflow: 'hidden',
        width: "40%",
        minWidth: "120px",
        display: {xs: 'flex'},
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        borderRadius: "9999px",
        border: "1.2px solid gray",
        pl: '2px',
        height: "33px",
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
        sx={{  transform: "translate(2px) translateZ(10px)", backgroundColor: "gray", color: "red" }}
        aria-label="search"
      >
      <Search />
      </IconButton>
      
    </Paper>
  );
}

export default SearchBar;
