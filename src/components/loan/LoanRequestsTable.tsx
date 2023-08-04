import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { dummyLoanRequests, APP_ROUTES } from "appConstants";
import { usePagination } from "hooks/usePagination";
import moment from "moment";
import { Link } from "react-router-dom";
import { TLoanRequest } from "types";

export const LoanRequestsTable: React.FC<{
    data?: TLoanRequest[];
    loading?: boolean;
    total?: number;
  }> = ({ data = dummyLoanRequests, loading, total }) => {
    const { pagination, onChange } = usePagination();
  
    const columns: ColumnsType<TLoanRequest> = [
      {
        title: "User",
        dataIndex: "name",
        key: "name",
        render: (_, item) => <span className="capitalize">{item.FULL_NAME}</span>,
      },
      {
        title: "Transaction Id",
        dataIndex: "id",
        key: "id",
        render: (_, item) => (
          <span className="capitalize">{item.TRANSACTION_ID}</span>
        ),
      },
      {
        title: "Loan Amount",
        dataIndex: "loan_amount",
        key: "loan_amount",
        render: (_, item) => (
          <span className="capitalize">{item.LOAN_AMOUNT}</span>
        ),
      },
      {
        title: "Repayment Duration",
        dataIndex: "repayment_duration",
        key: "repayment_duration",
        render: (_, item) => (
          <span className="capitalize">{item.REPAYMENT_DURATION}</span>
        ),
      },
      {
        title: "Created At",
        dataIndex: "created_at",
        key: "created_at",
        render: (_, item) => (
          <span className="capitalize">
            {moment(item.CREATED_TIME).format("YYYY-MM-DD")}
          </span>
        ),
      },
      {
        title: "Action",
        dataIndex: "view_repayment",
        key: "view_repayment",
        render: (_, item) => (
          <Link
            to={APP_ROUTES.repaymentSchedule(item.TRANSACTION_ID).path}
            className="capitalize underline text-sky-700"
          >
            View Repayment Schedule
          </Link>
        ),
      },
    ];
    return (
      <div>
        <Table
          columns={columns}
          size="small"
          dataSource={data}
          loading={loading}
          pagination={{ ...pagination, total }}
          onChange={onChange}
          scroll={{ x: "max-content" }}
        />
      </div>
    );
  };