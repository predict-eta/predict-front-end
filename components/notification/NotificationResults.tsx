import { Divider, Drawer, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { dataNotifications } from "./_mockData";
import { formatDate } from "./utils";

const drawerWidth = 300;

type NotificationResultsProps = {
  open?: boolean;
  onClose?: () => void;
  anchor?: "right" | "left" | "top" | "bottom" | undefined;
};

function NotificationResults({
  open,
  anchor = "right",
  onClose,
}: NotificationResultsProps) {
  return (
    <Drawer
      anchor={anchor}
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        zIndex: 1202,
        position: "relative",
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          pb: 2,
        },
        "& .MuiBackdrop-root": {
          bgcolor: "transparent",
        },
      }}
      variant="temporary"
      onClose={onClose}
    >
      <Stack
        sx={{
          px: 1.5,
          py: 2,
        }}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h6">Notifications</Typography>
        <IconButton size="small" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <Divider />
      <Stack divider={<Divider sx={{ borderStyle: "dashed" }} flexItem />}>
        {dataNotifications.map((noti) => (
          <Stack key={noti.id} p={1.5} py={1} spacing={1.5}>
            <Stack>
              <Typography variant="subtitle1" fontWeight={700}>
                {noti.title}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: (theme) => theme.palette.grey[400],
                }}
              >
                {noti?.timestamp ? formatDate(new Date(noti.timestamp)) : ""}
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "3",
                WebkitBoxOrient: "vertical",
              }}
            >
              {noti.content}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Drawer>
  );
}

export default NotificationResults;
