import React from "react";
import { PostProps } from "./_mockData";
import { Box, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

function PostItem({ data }: { data: PostProps }) {
  const router = useRouter();

  const handleViewDetails = () => router.push(`/news/${data.id}`);

  return (
    <Grid item xs={12} md={6}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 2,
          overflow: "hidden",
          cursor: "pointer",
        }}
        onClick={handleViewDetails}
      >
        <Box
          width={{ xs: 1, sm: 250 }}
          height={200}
          sx={{
            backgroundImage: `url(${data.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexShrink: 0,
            cursor: "pointer",
          }}
        />
        <Stack p={2}>
          <Typography variant="subtitle1">{data.title}</Typography>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography variant="caption">{data.dateTime}</Typography>
            <Chip size="small" label={data.category} color="primary" />
          </Stack>
          <Typography
            variant="body2"
            sx={{
              mt: 2,
            }}
          >
            {data.description}
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
}

export default PostItem;
