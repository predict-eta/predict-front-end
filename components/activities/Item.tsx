import React from 'react'
import { Typography, Stack } from '@mui/material'
import { ActivitiesProps } from './_mockData'

function ActivityItem({ data }: { data: ActivitiesProps }) {
  return (
    <Stack
      flex={1}
      width={1}
      height={1}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      sx={{
        zIndex: 10,
        px: 6,
      }}
    >
      <Typography variant="h4" color="white">
        {data.title}
      </Typography>
      <Typography variant="body2" color="white">
        {data.description}
      </Typography>
    </Stack>
  )
}

export default ActivityItem
