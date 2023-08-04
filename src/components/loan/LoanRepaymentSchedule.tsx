import { List, Avatar } from "antd";
import { APP_ROUTES, dummyInstallments } from "appConstants";
import Loader from "components/loader";
import moment from "moment";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { TRepaymentSchedule, RepaymentInstallment } from "types";
import { LeftOutlined } from "@ant-design/icons";

export const LoanRepaymentSchedule: React.FC<{
  data: TRepaymentSchedule | null;
  loading?: boolean;
}> = ({ data, loading }) => {
  const loanDetails = useMemo(
    () => [
      {
        key: "Full name",
        value: data?.FULL_NAME ?? "MIKE AFOLABI",
      },
      {
        key: "LOAN AMOUNT",
        value: data?.LOAN_AMOUNT ?? "6000000.00",
      },
      {
        key: "REPAYMENT DURATION",
        value: data?.REPAYMENT_DURATION ?? "6000000.00",
      },
      {
        key: "CUMULATIVE REPAYMENT AMOUNT",
        value: data?.CUMULATIVE_REPAYMENT_AMOUNT ?? "631500.00",
      },
      {
        key: "DATE",
        value: moment(data?.DATE ?? "2023-08-01 15:26:57").format("YYYY-MM-DD"),
      },
    ],
    [data]
  );
  return (
    <Loader loading={loading}>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        {/* image n animation */}
        <div className="bg-white block lg:flex shadow-lg">
          <div
            className={`relative lg:fixed lg:w-2/4 top-0  bg-cover bg-center bg-no-repeat bg-gradient-to-t from-sky-300 to-white left-0 z-20 h-screen shadow-lg flex flex-col gap-4 px-6 pt-4 pb-6`}
            // style={{ backgroundImage: "url(/assets/landing2.jpg)" }}
          >
            <div className=" text-slate-700 mt-4 flex flex-col gap-6">
              <div className="flex items-center gap-2 mb-6">
                <Link to={APP_ROUTES.index}>
                  <LeftOutlined className="font-bold text-xl" />
                </Link>
                <h1 className="text-2xl font-bold">
                  {data?.TRANSACTION_ID ?? "TRANS00120230801042657"}
                </h1>
              </div>

              <div className="flex flex-col gap-3">
                {loanDetails.map((item, i) => (
                  <div className="flex flex-col gap-1" key={i}>
                    <span className="font-bold capitalize">{item.key}:</span>
                    <span> {item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* register school form */}
        <div className="flex flex-col gap-4 items-center pt-8">
          {/* heading */}
          <div className="flex flex-col items-center">
            <p className="text-lg font-semibold">Installmental Repayments</p>
          </div>
          {/* form */}
          <div className="w-4/5">
            <Repayments data={data?.data} />
          </div>

          <div className="h-72" />
          <div className="h-72" />
          <div className="h-72" />
          <div className="h-72" />
        </div>
      </div>
    </Loader>
  );
};

const Repayments: React.FC<{ data?: RepaymentInstallment[] }> = ({
  data = dummyInstallments,
}) => {
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(installment, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                />
              }
              title={<h4 className="font-bold">{`Payment ${index + 1}`}</h4>}
              description={
                <div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        key: "Loan Balance",
                        value: installment?.LOAN_BALANCE ?? "500000.00",
                      },
                      {
                        key: "MONTH COUNT",
                        value: installment?.MONTH_COUNT ?? "2",
                      },
                      {
                        key: "EXPECTED REPAYMENT    AMOUNT",
                        value:
                          installment?.EXPECTED_REPAYMENT_AMOUNT ?? "100000.00",
                      },
                      {
                        key: "INTEREST",
                        value: installment?.INTEREST ?? "6000.00",
                      },
                      {
                        key: "TOTAL REPAYMENT   AMOUNT",
                        value:
                          installment?.TOTAL_REPAYMENT_AMOUNT ?? "106000.00",
                      },
                    ].map((item, i) => (
                      <span className="text-xs block" key={i}>
                        <span className="font-semibold uppercase">
                          {item.key}:
                        </span>{" "}
                        {item.value}
                      </span>
                    ))}
                  </div>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};
