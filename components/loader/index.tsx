import { Box, styled } from "@mui/material";
import Image from "next/image";
import loadingIcon from "@/public/loading-icon.svg";

const RootStyle = styled("div")(({ theme }) => ({
  right: 0,
  bottom: 0,
  zIndex: 99999,
  width: "100%",
  height: "100%",
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default function Loader() {
  return (
    <RootStyle>
      <Image src={loadingIcon} width={160} height={160} alt="Loading" />
    </RootStyle>
  );
}
