import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constant";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: {xs: "95vw", sm: "45vw", md: "34vw",lg: "300px", xl: "310px"},
        
        margin: 'auto',
        marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "150px",
              width: "150px",
              margin:" 0 auto",
              marginBottom: "8px",
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: '14px', color: "gray", ml: "5px" }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray'}}>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString('en-US')}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
