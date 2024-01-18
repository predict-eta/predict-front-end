import { Grid } from '@mui/material'
import React from 'react'
import { dataPosts } from './_mockData'
import PostItem from './PostItem'

function PostList() {
  return (
    <Grid container spacing={2}>
      {dataPosts.map((post) => (
        <PostItem key={post.id} data={post} />
      ))}
    </Grid>
  )
}

export default PostList
