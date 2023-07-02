import { CheckCircle } from "@mui/icons-material";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {


  demoVideoUrl,
  demoThumbnailUrl,
  demoVideoTitle,
  demoChannelTitle,
  demoChannelUrl,
} from "../utils/constant";



const VideoCard = ({
  video
}) => {

  const {
    id: { videoId },
    snippet,

  } = video;
  return (
    <Card
      sx={{
        width: { xs: "95vw", sm: "45vw", md: "34vw",lg: "298px", xl: "310px" },
        transform: {xs: "translateX(-5px)", md: "translateX(0px)"},
        boxShadow: "none",
        borderRadius: "8px",
        backgroundColor: 'transparent'
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoThumbnailUrl}>
        <CardMedia
          className="round-img"
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ aspectRatio: "13/9", marginTop: '-1.6rem' }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#000000", height: "50px", marginTop: '-1.3rem'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography fontSize="13px" color="white">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography sx={{display: "flex", alignItems: "center"}}  fontSize="10px" color="gray">
            {snippet?.channelTitle.slice(0, 60) ||
              demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
