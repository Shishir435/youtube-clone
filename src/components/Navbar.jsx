import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import React from "react";
import { logo } from "../utils/contstant";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "stickey",
        background: "#000",
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} /> <span style={{color: "white", fontSize: "45px", marginLeft: '5px', marginRight: '5px'}}>Clone</span>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
