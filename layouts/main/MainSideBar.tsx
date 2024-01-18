"use client";

import {
  IconButton,
  styled,
  useTheme,
  Drawer,
  Stack,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Box,
  Button,
  Toolbar,
  Divider,
  alpha,
  ListItemIcon,
} from "@mui/material";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import NotificationResults from "@/components/notification/NotificationResults";
import { useState } from "react";

export const drawerWidth = 212;

type MenuProps = {
  id: number;
  icon?: React.ReactNode;
  value: string;
  href?: string;
  exact?: boolean;
};

const menus: MenuProps[] = [
  { id: 1, value: "Home", href: "/", icon: <HomeIcon />, exact: true },
  { id: 3, value: "History", href: "/routes", icon: <HistoryIcon /> },
  {
    id: 4,
    value: "Pricing",
    href: "/balance",
    icon: <AccountBalanceWalletIcon />,
  },
  { id: 5, value: "Notice For Use", href: "/news", icon: <NewspaperIcon /> },
  {
    id: 6,
    value: "Notification",
    href: "/notification",
    icon: <NotificationsIcon />,
  },
  { id: 7, value: "Profile", href: "/account-setting", icon: <SettingsIcon /> },
  { id: 8, value: "Login", href: "/sign-in", icon: <LoginIcon /> },
  { id: 9, value: "Create Account", href: "/sign-up", icon: <PersonAddIcon /> },
];

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

type MainSideBarProps = {
  open: boolean;
  onClose: () => void;
  isDownMd?: boolean;
};

function MainSideBar({ open, isDownMd, onClose }: MainSideBarProps) {
  const theme = useTheme();
  const router = useRouter();
  const [openNotify, setOpenNotify] = useState(false);

  const handleNavigate = (href: string) => {
    router.push(href);
  };

  const handleClickItem = (item: MenuProps) => {
    switch (item.value) {
      case "Notification":
        setOpenNotify(true);
        break;
      default:
        handleNavigate(item.href ?? "");
    }
  };

  return (
    <>
      <DrawerContainer open={open} isPeristent={isDownMd} onClose={onClose}>
        <Toolbar />
        <Divider />
        <Stack sx={{ px: 1 }}>
          <List sx={{ py: 0 }}>
            {menus.map((menu) => {
              let isActive = false;
              if (menu.href) {
                if (menu.exact) {
                  isActive = router.asPath === menu.href;
                } else {
                  isActive = router.asPath?.startsWith(menu.href);
                }
              }
              return (
                <ListItem key={menu.id} disablePadding sx={{ mt: 2 }}>
                  <ListItemButton
                    sx={{
                      py: 0.5,
                      borderRadius: 1.5,
                      "&:hover": {
                        bgcolor: (theme) =>
                          alpha(theme.palette.primary.light, 0.1),
                      },
                      ...(isActive && {
                        color: (theme) => theme.palette.primary.main,
                      }),
                    }}
                    disableTouchRipple
                    onClick={() => handleClickItem(menu)}
                  >
                    {menu.icon && (
                      <ListItemIcon
                        sx={{
                          minWidth: 34,
                          ...(isActive && {
                            color: (theme) => theme.palette.primary.main,
                          }),
                        }}
                      >
                        {menu.icon}
                      </ListItemIcon>
                    )}
                    <ListItemText
                      primary={
                        <Typography
                          fontSize={12}
                          fontWeight={600}
                          noWrap
                          textOverflow="ellipsis"
                          overflow="hidden"
                        >
                          {menu.value.toUpperCase()}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Stack>
      </DrawerContainer>
      <NotificationResults
        open={openNotify}
        anchor="left"
        onClose={() => setOpenNotify(false)}
      />
    </>
  );
}

export default MainSideBar;

function DrawerContainer({
  isPeristent,
  open,
  children,
  onClose,
}: {
  isPeristent?: boolean;
  open?: boolean;
  children: React.ReactNode;
  onClose?: () => void;
}) {
  if (isPeristent)
    return (
      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        onClose={onClose}
      >
        {children}
      </Drawer>
    );
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        position: "relative",
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          pb: 2,
        },
      }}
      elevation={2}
      variant="permanent"
      // anchor="left"
    >
      {children}
    </Drawer>
  );
}
