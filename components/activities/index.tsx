import React from 'react'
import { Card, alpha, Box } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import { activities } from './_mockData'
import { CARD_HEIGHT } from '@/pages'
import ActivityItem from './Item'

function ActivitiesContainer() {
  return (
    <Carousel
      sx={{
        height: 1,
        borderRadius: 2,
      }}
      navButtonsAlwaysVisible
      navButtonsProps={{
        style: {
          backgroundColor: 'transparent',
        },
      }}
      indicatorIconButtonProps={{
        style: {
          padding: '2px', // 1
          color: 'grey',
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: 'white', // 2
        },
      }}
      indicatorContainerProps={{
        style: {
          marginTop: '-30px', // 5
        },
      }}
    >
      {activities.map((item, i) => (
        <Card
          key={i}
          sx={{
            height: CARD_HEIGHT,
            bgcolor: 'transparent',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <ActivityItem data={item} />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: 1,
              width: 1,
              background: (theme) =>
                `${alpha(theme.palette.common.black, 0.6)}`,
            }}
          />
        </Card>
      ))}
    </Carousel>
  )
}

export default ActivitiesContainer
