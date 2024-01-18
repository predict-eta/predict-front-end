import ActivitiesContainer from "@/components/activities";
import InputRouteView from "@/components/input-route/InputRouteView";
import RootLayout from "@/layouts/main";
import {
  Container,
  Card,
  CardHeader,
  Grid,
  Typography,
  CardContent,
} from "@mui/material";
import bgImage from "@/public/aseanlines2.png";

export const CARD_HEIGHT = 300;

const DashBoard = () => {
  return (
    <RootLayout
      sx={{
        background: `url(${bgImage.src})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          height: "calc(100vh - 64px)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid
          container
          sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
          spacing={{ xs: 2, md: 5 }}
        >
          <Grid item xs={12} md={6}>
            <Card sx={{ height: CARD_HEIGHT, borderRadius: 2 }}>
              <CardHeader
                title={
                  <Typography variant="subtitle1">
                    Estimated Time of Arrival (ETA)
                  </Typography>
                }
                sx={{
                  pb: 0,
                }}
              />
              <InputRouteView />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <ActivitiesContainer />
          </Grid>
        </Grid>
      </Container>
    </RootLayout>
  );
};

export default DashBoard;
