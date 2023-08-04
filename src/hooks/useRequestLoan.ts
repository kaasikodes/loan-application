import { BASE_API_ENDPOINT } from "config/enviroment";
import { useState } from "react";
import { TRequestState } from "types";

interface RequestResponse {
  code: number;
  result: boolean;
  message: string;
  transaction_id: string;
}

interface RequestProps {
  full_name: string;
  loan_amount: number;
  repayment_duration: number;
}
export const useRequestLoan = (props: { action: "request_for_loan" }) => {
  const [reqState, setReqState] = useState<TRequestState>();
  const [data, setData] = useState<RequestResponse | null>(null);

  const onRequest = (data: RequestProps) => {
    setReqState("loading");
    requestLoan({ ...data, ...props })
      .then((res) => {
        setData(res);
        setReqState("success");
      })
      .catch(() => setReqState("error"));
  };

  return {
    data,
    reqState,
    onRequest,
  };
};

const requestLoan = async (
  props: RequestProps & { action: "request_for_loan" }
): Promise<RequestResponse> => {
  let url = `${BASE_API_ENDPOINT}/`;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...props }),
  };

  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};
