import React, { ReactElement } from "react";
import RootLayout from "@/layouts/main";
import PaymentContainer from "@/components/payment";
import { NextPageWithLayout } from "../_app";

const PaymentPage: NextPageWithLayout = () => {
  return <PaymentContainer />;
};

PaymentPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default PaymentPage;
