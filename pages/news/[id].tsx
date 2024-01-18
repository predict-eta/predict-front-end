import React from "react";
import RootLayout from "@/layouts/main";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { GetServerSideProps } from "next";
import PostDetails from "@/components/posts/PostDetails";
import { Button, Container, Stack, Typography } from "@mui/material";
import { PostProps, dataPosts } from "@/components/posts/_mockData";
import Link from "next/link";
import Home from "@/components/editor";

type PostDetailProps = {
  data: PostProps;
};

function PostDetail({ data }: PostDetailProps) {
  return (
    <RootLayout>
      <Container sx={{ width: 1, maxWidth: 1200 }} maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={4}
        >
          <Link href="/news">
            <Button startIcon={<ArrowBackIcon />}>Back To List</Button>
          </Link>
          <Typography variant="h5">{data.category}</Typography>
        </Stack>
        <PostDetails data={data} />
      </Container>
    </RootLayout>
  );
}

export default PostDetail;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = Number(ctx.query?.id);

  const findedPost = dataPosts.find((post) => post.id === id);

  return {
    props: {
      data: findedPost,
    },
    notFound: !findedPost,
  };
};
