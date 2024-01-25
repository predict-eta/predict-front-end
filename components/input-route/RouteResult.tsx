import React, { useMemo } from 'react'
import { ResponseType } from './InputRouteView'
import { Divider, Stack } from '@mui/material'
import CloudIcon from '@mui/icons-material/Cloud'
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat'
import { addDays } from '@/utils/dateHelpers'
import { KeyValueItem, RouteDate, RouteLine } from './common'
import { Congestion, CongestionEnum, Weather, WeatherEnum } from './constants'

const randomWeather = () => {
  const randNum = Math.round(Math.random() * 2)
  return {
    value: randNum,
    label: (Weather as any)[randNum],
  }
}

const randomCongestion = () => {
  const randNum = Math.round(Math.random() * 2)
  return {
    value: randNum,
    label: (Congestion as any)[randNum],
  }
}

const BAD_WEATHER_DAYS = 10
const BAD_CONGESTION_DAYS = 5

function RouteResults({
  startDate,
  result,
}: {
  startDate: Date
  result: ResponseType
}) {
  const transfData = useMemo(() => {
    let rangeDate = result?.['Estimate Time of Arrival (ETA) (days)'] || 0
    const weatherObj = randomWeather()
    const congestionObj = randomCongestion()

    if (weatherObj.value === WeatherEnum.Bad) {
      rangeDate += BAD_WEATHER_DAYS
    }

    if (congestionObj.value === CongestionEnum.Bad) {
      rangeDate += BAD_CONGESTION_DAYS
    }

    return {
      rangeDate,
      weather: weatherObj.label,
      congestion: congestionObj.label,
    }
  }, [result])

  return (
    <Stack flex={1} width={1} spacing={2} my={3}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems="stretch"
        sx={{
          p: 2,
          bgcolor: (theme) => theme.palette.common.white,
          borderRadius: 2,
        }}
        spacing={1}
      >
        <Stack
          direction="row"
          spacing={1.5}
          sx={{
            width: { xs: 1, sm: '70%', md: '60%' },
          }}
        >
          <RouteDate title="Origin" date={startDate.toLocaleDateString()} />
          <RouteLine rangeDate={transfData.rangeDate} />
          <RouteDate
            title="Destination"
            date={addDays(startDate, transfData.rangeDate).toLocaleDateString()}
          />
        </Stack>
        <Stack>
          <Divider sx={{ height: 1, borderWidth: 1 }} />
        </Stack>
        <Stack spacing={1}>
          <KeyValueItem
            propertyKey="Weather"
            value={transfData.weather}
            icon={
              <CloudIcon
                fontSize="small"
                sx={{
                  color: (theme) => theme.palette.grey[600],
                }}
              />
            }
          />
          <KeyValueItem
            propertyKey="Congestion"
            value={transfData.congestion}
            icon={
              <DirectionsBoatIcon
                fontSize="small"
                sx={{
                  color: (theme) => theme.palette.grey[600],
                }}
              />
            }
          />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default RouteResults
