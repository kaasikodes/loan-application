import { useGetRepaymentSchedule } from "hooks/useGetRepaymentSchedule";
import React from "react";

import { useParams } from "react-router-dom";
import { APP_ROUTES } from "appConstants";

import { LoanRepaymentSchedule } from "components/loan";
import ErrorComp from "components/error";

const RepaymentSchedule = () => {
  const params = useParams();
  const transactionId = params.id as unknown as string;
  const { data, reqState } = useGetRepaymentSchedule({
    action: "get_repayment_schedule",
    transaction_id: transactionId,
  });
  return (
    <ErrorComp
      isError={reqState === "error"}
      img="/assets/404.jpg"
      message="An error occured while fetching repayment schedule;Contact Backend to fix this problem, its a cors error"
      link={{
        text: "Go Back",
        url: APP_ROUTES.index,
      }}
    >
      <LoanRepaymentSchedule data={data} loading={reqState === "loading"} />
    </ErrorComp>
  );
};

export default RepaymentSchedule;
