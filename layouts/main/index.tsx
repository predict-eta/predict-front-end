import { useState } from "react";
import {
  Box,
  CssBaseline,
  IconButton,
  Stack,
  Toolbar,
  Badge,
  styled,
  Typography,
  useMediaQuery,
  SxProps,
  Theme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "./MainHeader";
import { useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MainSideBar, { DrawerHeader, drawerWidth } from "./MainSideBar";
import Image from "next/image";
import logo from "@/public/logo-asianlines.png";
import Notification from "@/components/notification";
import Link from "next/link";

const Main = styled("main")(({ theme }) => ({
  marginRight: 0,
  position: "relative",
}));

export default function RootLayout({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}) {
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        ...sx,
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        color="inherit"
        sx={{
          boxShadow: "none",
          bgcolor: (theme) => theme.palette.primary.main,
          zIndex: 1201,
        }}
      >
        <Toolbar>
          {isDownMd && (
            <IconButton
              aria-label="open drawer"
              onClick={() => {
                if (open) handleDrawerClose();
                else handleDrawerOpen();
              }}
              edge="start"
              sx={{ mr: 2, color: "white" }}
            >
              {!open ? <MenuIcon /> : <ChevronLeftIcon />}
            </IconButton>
          )}
          <Image src={logo} alt="Logo" width={80} height={50} />
          <Stack flex={1} />
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Link
              href="https://aseanlines.ca/our-solutions/"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              ASLSMR Solutions
            </Link>
            <Link
              href="https://aseanlines.ca/contact/"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              Contact
            </Link>
            <Notification />
          </Stack>
        </Toolbar>
      </AppBar>
      <MainSideBar
        open={open}
        onClose={handleDrawerClose}
        isDownMd={isDownMd}
      />
      <Main
        sx={{
          flexGrow: 1,
          // p: { xs: 1, sm: 3 },
          px: { xs: 1, sm: 3 },
          pt: 0,
          width: { xs: 1, md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Main>
    </Box>
  );
}
