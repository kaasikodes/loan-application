import { TLoanRequest } from "./loanRequest";
import { RepaymentInstallment, TRepaymentSchedule } from "./repaymentSchedule";

export type TRequestState = "loading" | "error" | "success";

export {
  type TRepaymentSchedule,
  type RepaymentInstallment,
  type TLoanRequest,
};
