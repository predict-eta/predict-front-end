import RouteTable from "@/components/table/route-table";
import RootLayout from "@/layouts/main";
import { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

const Routes: NextPageWithLayout = () => {
  return <RouteTable />;
};

Routes.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Routes;
