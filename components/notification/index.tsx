import React, { useState } from "react";
import { IconButton, Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationResults from "./NotificationResults";

function Notification() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <Badge
          badgeContent={4}
          color="primary"
          sx={{
            "& .MuiBadge-badge": {
              background: (theme) => theme.palette.common.white,
              color: (theme) => theme.palette.primary.main,
            },
          }}
        >
          <MailIcon color="action" sx={{ color: "white" }} />
        </Badge>
      </IconButton>
      <NotificationResults open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default Notification;
