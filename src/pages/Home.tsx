import React, { useState } from "react";
import { useGetAllLoanRequests } from "hooks/useGetAllLoanRequests";
import { Button } from "antd";
import ErrorComp from "components/error";
import { AddLoanRequest, LoanRequestsTable } from "components/loan";
import { APP_NAME } from "config/enviroment";

export interface IModalProps {
  open: boolean;
  handleClose: () => void;
}

const Home = () => {
  const { data, reqState, handleRefetch } = useGetAllLoanRequests({
    action: "get_all_loan_request",
  });
  const [action, setAction] = useState<"add-loan-request">();
  return (
    <>
      <AddLoanRequest
        open={action === "add-loan-request"}
        handleClose={() => setAction(undefined)}
        refetchLoanRequests={handleRefetch}
      />
      <div className="container flex flex-col gap-4 px-8 lg:px-12 py-6">
        <h1 className="text-2xl font-bold">{APP_NAME}</h1>
        <div className="flex justify-end">
          <Button onClick={() => setAction("add-loan-request")}>
            Add Loan Request
          </Button>
        </div>
        <ErrorComp
          isError={reqState === "error"}
          img="/assets/404.jpg"
          message="An error occured while fetching loan requests: Contact Backend to fix this problem, its a cors error"
        >
          <LoanRequestsTable
            loading={reqState === "loading"}
            data={data?.data}
            total={data?.total_search_record}
          />
        </ErrorComp>
      </div>
    </>
  );
};

export default Home;
