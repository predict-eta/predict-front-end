import React from "react";
import { PostProps, dataPosts } from "./_mockData";
import { Box, Stack, Typography } from "@mui/material";

type PostDetailsProps = {
  data: PostProps;
};

function PostDetails({ data }: PostDetailsProps) {
  return (
    <Stack spacing={2}>
      <Box
        width={1}
        height={250}
        sx={{
          background: `linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(79,79,79,0.9) 100%),url(${data.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          flexShrink: 0,
          borderRadius: 4,
          position: "relative",
        }}
      />
      <Typography variant="h3">{data.title}</Typography>
      <Typography variant="h4">{data.description}</Typography>
      <div dangerouslySetInnerHTML={{ __html: data?.content ?? "" }}></div>
    </Stack>
  );
}

export default PostDetails;
