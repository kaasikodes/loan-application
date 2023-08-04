import { BASE_API_ENDPOINT } from "config/enviroment";
import { useEffect, useState } from "react";
import { TLoanRequest, TRequestState } from "types";

interface RequestResponse {
  code: number;
  result: boolean;
  total_search_record: number;
  data: TLoanRequest[];
}

interface RequestProps {
  action: "get_all_loan_request";
}
export const useGetAllLoanRequests = (props: RequestProps) => {
  const [reqState, setReqState] = useState<TRequestState>("loading");
  const [data, setData] = useState<RequestResponse>();
  const [refetch, setRefetch] = useState(false);
  useEffect(() => {
    getAllRequestLoans(props)
      .then((res) => {
        setData(res);
        setReqState("success");
      })
      .catch(() => setReqState("error"));
  }, [props, refetch]);

  const handleRefetch = () => {
    setRefetch((val) => !val);
  };

  return {
    data,
    reqState,
    handleRefetch,
  };
};

const getAllRequestLoans = async (
  props: RequestProps
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
