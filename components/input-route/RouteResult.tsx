import React from "react";
import { ResponseType } from "./InputRouteView";
import { Divider, Stack } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import { addDays } from "@/utils/dateHelpers";
import { KeyValueItem, RouteDate, RouteLine } from "./common";

function RouteResults({
  startDate,
  result,
}: {
  startDate: Date;
  result: ResponseType;
}) {
  const rangeDate = result?.["Estimate Time of Arrival (ETA) (days)"] || 0;
  return (
    <Stack flex={1} width={1} spacing={2} my={3}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
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
            width: { xs: 1, sm: "70%", md: "60%" },
          }}
        >
          <RouteDate title="Origin" date={startDate.toLocaleDateString()} />
          <RouteLine rangeDate={rangeDate} />
          <RouteDate
            title="Destination"
            date={addDays(startDate, rangeDate).toLocaleDateString()}
          />
        </Stack>
        <Stack>
          <Divider sx={{ height: 1, borderWidth: 1 }} />
        </Stack>
        <Stack spacing={1}>
          <KeyValueItem
            propertyKey="Weather"
            value="Good"
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
            value="Normal"
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
  );
}

export default RouteResults;
