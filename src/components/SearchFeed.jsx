import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  return (
    <Box p={2} minHeight="95vh">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ color: "white" }}
        mb={3}
        ml={{ sm: "100px" }}
      >
        Search Results for:{" "}
        <span style={{ color: "#F31503" }}>{searchTerm}</span>
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;