export const APP_ROUTES = {
  index: "/",
  repaymentSchedule: (id?: string) => ({
    format: `repayment-schedule/:id`,
    path: `repayment-schedule/${id}`,
  }),
};
