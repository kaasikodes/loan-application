import { BASE_API_ENDPOINT } from "config/enviroment";
import { useEffect, useState } from "react";
import { TRepaymentSchedule, TRequestState } from "types";

interface RequestProps {
  action: "get_repayment_schedule";
  transaction_id: string;
}
export const useGetRepaymentSchedule = (props: RequestProps) => {
  const [reqState, setReqState] = useState<TRequestState>("loading");
  const [data, setData] = useState<TRepaymentSchedule | null>(null);
  useEffect(() => {
    getRepaymentSchedule(props)
      .then((res) => {
        setData(res);
        setReqState("success");
      })
      .catch(() => setReqState("error"));
  }, [props]);

  return {
    data,
    reqState,
  };
};

const getRepaymentSchedule = async (
  props: RequestProps
): Promise<TRepaymentSchedule> => {
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
