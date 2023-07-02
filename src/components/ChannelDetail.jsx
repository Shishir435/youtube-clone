import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetails] = useState();
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      
      setChannelDetails(data?.items[0]);
       console.log("from channel details : ",channelDetail)
      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id, channelDetail]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(29,102,150,1) 4%, rgba(67,107,211,1) 54%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "150px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box display="flex" sx={{display: "flex", flexWrap: "wrap", margin: "15px " }}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} channelDetail={channelDetail} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
