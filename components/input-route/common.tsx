import React from "react";
import { Stack, Tooltip, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import shipIcon from "@/public/ship-icon.svg";
import Image from "next/image";

function RouteDate({ title, date }: { title: string; date: string }) {
  return (
    <Stack direction="row" alignItems="center" spacing={1} flexShrink={0}>
      <CalendarTodayIcon
        fontSize="small"
        sx={{
          color: (theme) => theme.palette.grey[600],
        }}
      />
      <Stack>
        <Typography
          variant="subtitle1"
          fontWeight={700}
          noWrap
          sx={{
            color: (theme) => theme.palette.grey[600],
          }}
        >
          {title}
        </Typography>
        <Typography variant="h6">{date}</Typography>
      </Stack>
    </Stack>
  );
}

function RouteLine({ rangeDate }: { rangeDate?: number }) {
  return (
    <Stack
      width={1}
      position="relative"
      justifyContent="center"
      sx={{
        "&::after": {
          content: '""',
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(calc(-50%)) rotate(-45deg)",
          border: (theme) => `solid ${theme.palette.grey[400]}`,
          borderWidth: "0 2px 2px 0",
          display: "inline-block",
          padding: "2px",
        },
      }}
    >
      <Stack
        direction="row"
        sx={{
          position: "absolute",
          left: "50%",
          top: "-10px",
          transform: "translateX(-50%)",
        }}
        alignItems="center"
        spacing={0.5}
        flexShrink={0}
      >
        <Typography
          variant="body2"
          fontWeight={700}
          noWrap
          sx={{ color: (theme) => theme.palette.grey[600] }}
        >
          {rangeDate} DAY(S)
        </Typography>
        <Tooltip
          title="Time estimated between Origin Departure Date to Destination Arrival Date"
          arrow
          placement="top"
        >
          <ErrorOutlineIcon
            sx={{
              cursor: "pointer",
              fontSize: "1rem",
              color: (theme) => theme.palette.grey[500],
            }}
          />
        </Tooltip>
      </Stack>
      <Stack
        height={0}
        borderTop={(theme) => `2px dashed ${theme.palette.divider}`}
      />
      <Image
        src={shipIcon}
        width={24}
        height={24}
        alt="ship-icon"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </Stack>
  );
}

function KeyValueItem({
  propertyKey,
  icon,
  value,
}: {
  propertyKey: string;
  icon: React.ReactNode;
  value: string;
}) {
  return (
    <Stack direction="row" alignItems="center" spacing={1.5}>
      <Stack direction="row" spacing={0.5} alignItems="center">
        {icon}
        <Typography
          variant="body2"
          fontWeight={600}
          sx={{ color: (theme) => theme.palette.grey[500] }}
        >
          {propertyKey}
        </Typography>
      </Stack>
      <Typography
        variant="subtitle1"
        fontWeight={700}
        sx={{ color: (theme) => theme.palette.grey[600] }}
      >
        {value}
      </Typography>
    </Stack>
  );
}

export { KeyValueItem, RouteDate, RouteLine };
