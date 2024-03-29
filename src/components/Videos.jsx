import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard, Loader } from "./";
import React from "react";

function Videos({ videos, direction }) {

  if (!videos?.length) return <Loader />;
  return (
    <Stack
      direction={direction || "row"}
      display="flex"
      flexWrap="wrap"
      justifyContent="start"
      alignItems='start'
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
