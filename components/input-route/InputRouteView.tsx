"use client";
// ** React Imports
import React, { useState, useMemo, forwardRef, useEffect, useRef } from "react";

// ** MUI Imports
import {
  Typography,
  Grid,
  Autocomplete,
  TextField,
  CardContent,
  Button,
  Stack,
  Box,
  Paper,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import RoomIcon from "@mui/icons-material/Room";
import DatePicker from "react-datepicker";
import { useRouter } from "next/router";
import Loader from "../loader";
import { countries } from "../data";
import "react-datepicker/dist/react-datepicker.css";
import RouteResult from "./RouteResult";
import { predictRoute } from "@/lib/api";
import Snackbar from "@/utils/notistack/Snackbar";

// eslint-disable-next-line react/display-name
export const CustomStartDateInput = forwardRef((props, ref) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography
        variant="subtitle2"
        flexShrink={0}
        width={140}
        textAlign="right"
      >
        Start Date
      </Typography>
      <TextField inputRef={ref} size="small" fullWidth {...props} />
    </Stack>
  );
});

// eslint-disable-next-line react/display-name
export const CustomArrivalDateInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label="Arrival Date" fullWidth {...props} />;
});

type InputRouteViewProps = {
  isShowResults?: boolean;
  defaultStart?: {
    countryId: number;
    portCode: string;
  };
  defaultEnd?: {
    countryId: number;
    portCode: string;
  };
  defaultStartDate?: Date | null;
};

type RouteType = {
  id: number;
  name: string;
  code: string;
  countryId: number;
  countryName: string;
} | null;

export type ResponseType = {
  "Estimate Time of Arrival (ETA) (days)": number | null;
} | null;

function findRouteByCountryAndCode(
  dataSource: {
    countryId: number;
    countryName: string;
    id: number;
    name: string;
    code: string;
  }[],
  country?: number,
  portCode?: string
) {
  if (!country || !portCode) return;
  return dataSource.find(
    (route) => route.countryId === country && route.code === portCode
  );
}

const dataRoutes = countries
  .map((x) => x.countries)
  .flat()
  .map((x) => {
    const newPorts = x.ports.map((k) => {
      return { ...k, countryId: x.id, countryName: x.name };
    });
    return { ...x, ports: newPorts };
  })
  .map((x) => x.ports)
  .flat();

const InputRouteView: React.FC<InputRouteViewProps> = ({
  isShowResults,
  defaultStart,
  defaultEnd,
  defaultStartDate,
}) => {
  const router = useRouter();
  // ** State
  const [isHandling, setIsHandling] = useState<boolean>(false);
  const [start, setStart] = useState<RouteType>(null);
  const [end, setEnd] = useState<RouteType>(null);
  const [date, setDate] = useState<Date | null | undefined>(null);
  const [result, setResult] = useState<ResponseType>(null);
  const firstFetchRef = useRef(false);

  useEffect(() => {
    const findedStartRoute =
      findRouteByCountryAndCode(
        dataRoutes,
        defaultStart?.countryId,
        defaultStart?.portCode
      ) || null;
    const findedEndRoute =
      findRouteByCountryAndCode(
        dataRoutes,
        defaultEnd?.countryId,
        defaultEnd?.portCode
      ) || null;
    setStart(findedStartRoute);
    setEnd(findedEndRoute);
    setDate(defaultStartDate);
    if (
      !firstFetchRef.current &&
      findedStartRoute &&
      findedEndRoute &&
      defaultStartDate
    ) {
      handlePredictRoutes({
        start: findedStartRoute,
        end: findedEndRoute,
        date: defaultStartDate,
      });
    }
    firstFetchRef.current = true;
  }, [defaultStart, defaultEnd, defaultStartDate]);

  const handle = (date: Date) => {
    setDate(date);
  };

  const handleError = ({
    start,
    end,
    date,
  }: {
    start: RouteType;
    end: RouteType;
    date: Date | null | undefined;
  }) => {
    if (!start || !end || !date) {
      Snackbar.warning("Please enter all fields before searching!");
      return true;
    }
    return false;
  };

  const handlePredictRoutes = async ({
    start,
    end,
    date,
  }: {
    start: RouteType;
    end: RouteType;
    date: Date | null | undefined;
  }) => {
    if (handleError({ start, end, date })) return;

    try {
      setIsHandling(true);
      const depatureYear = date?.getFullYear();
      const depatureMonth = (date?.getUTCMonth() || 0) + 1;
      const depatureDate = date?.getDate();
      const response = await predictRoute({
        DEPARTURE: start?.name,
        DESTINATION: end?.name,
        DEPARTURE_YEAR: [depatureYear],
        DEPARTURE_MONTH: [depatureMonth],
        DEPARTURE_DAY: [depatureDate],
      });
      setResult(response);
    } catch (error) {
      Snackbar.error("Something is error! Try again.");
    } finally {
      setIsHandling(false);
    }
  };

  const handleSearch = () => {
    if (handleError({ start, end, date })) return;

    if (!isShowResults) {
      router.push({
        pathname: "/search-routes",
        query: {
          startCountry: start?.countryId,
          startPort: start?.code,
          endCountry: end?.countryId,
          endPort: end?.code,
          startDate: date?.toLocaleDateString(),
        },
      });
    } else handlePredictRoutes({ start, end, date });
  };

  const handleReset = () => {
    setEnd(null);
    setStart(null);
    setDate(null);
    setResult(null);
  };

  const hasResults = result && date;

  return (
    <Stack alignItems="center">
      {isHandling && <Loader />}
      <Paper
        elevation={isShowResults ? 6 : 0}
        sx={{
          px: { xs: 1, sm: 3 },
          py: { xs: 2, sm: 4 },
          width: isShowResults ? { xs: 1, sm: "80%" } : 1,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Stack gap={4} position="relative">
              <Stack direction="row" alignItems="center" spacing={1}>
                <RoomIcon color="primary" />
                <Stack direction="row" alignItems="center" flex={1} spacing={2}>
                  <Typography variant="subtitle2" flexShrink={0} width={110}>
                    Departure Port
                  </Typography>
                  <Autocomplete
                    fullWidth
                    id="combo-box-demo"
                    size="small"
                    getOptionLabel={(option) =>
                      `${option.name} - ${option.countryName}`
                    }
                    value={start}
                    options={dataRoutes}
                    onChange={(event, value) => setStart(value)}
                    renderInput={(params) => (
                      <TextField
                        label="Departure Port"
                        placeholder="Departure Port"
                        {...params}
                      />
                    )}
                  />
                </Stack>
              </Stack>
              <Box
                position="absolute"
                top="50%"
                left={12}
                height="calc(100% - 80px)"
                sx={{
                  transform: "translateY(-50%)",
                }}
                borderRight={(theme) => `1px dashed ${theme.palette.divider}`}
              />
              <Stack direction="row" alignItems="center" spacing={1}>
                <RoomIcon color="primary" />
                <Stack direction="row" alignItems="center" flex={1} spacing={2}>
                  <Typography variant="subtitle2" flexShrink={0} width={110}>
                    Arrival Port
                  </Typography>
                  <Autocomplete
                    fullWidth
                    id="combo-box-demo-2"
                    size="small"
                    getOptionLabel={(option) =>
                      `${option.name} - ${option.countryName}`
                    }
                    value={end}
                    options={dataRoutes}
                    onChange={(event, value) => setEnd(value)}
                    renderInput={(params) => (
                      <TextField
                        label="Arrival Port"
                        placeholder="Arrival Port"
                        {...params}
                      />
                    )}
                  />
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <DatePicker
              selected={date}
              showYearDropdown
              showMonthDropdown
              id="start date"
              placeholderText="MM-DD-YYYY"
              customInput={<CustomStartDateInput />}
              onChange={(date: Date) => handle(date)}
            />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button
                size="small"
                variant="text"
                color="primary"
                disabled={isHandling}
                onClick={handleReset}
              >
                Clear
              </Button>
              <LoadingButton
                size="small"
                loading={isHandling}
                loadingIndicator="Loading..."
                onClick={() => handleSearch()}
                variant="contained"
                sx={{ marginRight: 3.5 }}
              >
                Search
              </LoadingButton>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
      {hasResults && <RouteResult startDate={date} result={result} />}
    </Stack>
  );
};

export default InputRouteView;
