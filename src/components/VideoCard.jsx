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
} from "../utils/contstant";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "260px", md: "240px" },
        boxShadow: "none",
        borderRadius: "25px 25px 25px 25px",
        backgroundColor: 'transparent'
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoThumbnailUrl}>
        <CardMedia
          className="round-img"
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "260px", md: "240px" }, height: 180, marginTop: '-1.6rem' }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "90px", marginTop: '-1.3rem'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="white">
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
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
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
