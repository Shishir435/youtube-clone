import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import {SideBar, Videos} from './'
const Feed = () => {

  const [selectedCategory, setSelectedCategory]=useState('Coding')
  const [videos, setVideos]= useState(null);

  useEffect(() =>{
    setVideos(null);
     fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
     .then((data)=>setVideos(data.items))
  },[selectedCategory])
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "95vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright&copy; Shishir
        </Typography>
      </Box>
      <Box p={2} sx={{ overflow: "auto", height: "95vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white", textAlign: "center", marginBottom: "25px" }}
        >
        {selectedCategory} <span style={{ color: "#F31503" }}>videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  );
};

export default Feed;
