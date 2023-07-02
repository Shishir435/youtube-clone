import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import React from "react";
import { logo } from "../utils/constant";
import SearchBar from "./SearchBar";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        margin: "0 4px",
        position: "sticky",
        background: "#000",
        display: "flex",
        alignItems: "center", 
        justifyContent: "space-between",
        gap: "10px"
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo}  alt="logo" height={30} /> <span className="logo-text">YT</span>
      </Link>
      <SearchBar/>
      <AccountCircleOutlinedIcon sx={{color: "white"}}/>
    </Stack>
  );
};

export default Navbar;
