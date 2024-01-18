import BalanceTable from "@/components/table/balance-table";
import RootLayout from "@/layouts/main";
import type { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";

const Balance: NextPageWithLayout = () => {
  return <BalanceTable />;
};

Balance.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Balance;
