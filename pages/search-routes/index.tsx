import React, { ReactElement, useMemo } from "react";
import InputRouteView from "@/components/input-route/InputRouteView";
import RootLayout from "@/layouts/main";
import { Card, Container, Paper, Stack, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import type { NextPageWithLayout } from "../_app";

const SearchRoutesPage: NextPageWithLayout = () => {
  const { query } = useRouter();
  const { startCountry, startPort, endCountry, endPort, startDate } =
    query ?? {};

  const convertedDate = useMemo(() => {
    return startDate ? new Date(String(startDate)) : null;
  }, [startDate]);

  return (
    <Container
      maxWidth="lg"
      sx={{ my: { xs: 1, sm: 2 }, px: { xs: 0, sm: 2 } }}
    >
      <Typography variant="h3" sx={{ mb: { xs: 2, sm: 3 } }}>
        Search Routes
      </Typography>
      <InputRouteView
        isShowResults
        defaultStart={{
          countryId: Number(startCountry),
          portCode: String(startPort),
        }}
        defaultEnd={{
          countryId: Number(endCountry),
          portCode: String(endPort),
        }}
        defaultStartDate={convertedDate}
      />
    </Container>
  );
};

SearchRoutesPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <RootLayout
      sx={{
        bgcolor: "#EFF2F7",
        minHeight: "100vh",
        height: 1,
      }}
    >
      {page}
    </RootLayout>
  );
};

export default SearchRoutesPage;
