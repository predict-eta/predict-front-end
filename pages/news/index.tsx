import PostList from "@/components/posts/PostList";
import RootLayout from "@/layouts/main";
import { Container, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

const PostListPage: NextPageWithLayout = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 2 }}>
      <Typography variant="h3">News</Typography>
      <PostList />
    </Container>
  );
};

PostListPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default PostListPage;
