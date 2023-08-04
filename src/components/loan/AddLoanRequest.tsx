import { Modal, Input, InputNumber, Button, Form } from "antd";
import { useRequestLoan } from "hooks/useRequestLoan";
import { IModalProps } from "pages/Home";
import { useEffect } from "react";
import { openNotification } from "utils/notifications";
import { textInputValidationRules, generalValidationRules } from "utils/validation";

export const AddLoanRequest: React.FC<
  IModalProps & { refetchLoanRequests: () => void }
> = ({ open, handleClose, refetchLoanRequests }) => {
  const [form] = Form.useForm();
  const { data, reqState, onRequest } = useRequestLoan({
    action: "request_for_loan",
  });

  const handleSubmit = (data: any) => {
    onRequest({
      full_name: data.full_name,
      loan_amount: data.loan_amount,
      repayment_duration: data.repayment_duration,
    });
  };

  useEffect(() => {
    if (reqState === "success") {
      form.resetFields();
      handleClose();
      // notify the user that action was successful using the data from response
      openNotification({
        state: "success",
        title: "Success",
        description: data?.message ?? "Loan Request Created!",
        duration: 0.5,
      });
      // update the existing loan requests, by refetching them, as the response doesn't contain full data on created loan request
      refetchLoanRequests();
    }
    if (reqState === "error") {
      // inform the user
      openNotification({
        state: "error",
        title: "Error Occured",
        description: data?.message ?? "Oops, error occured",
        duration: 0.5,
      });
    }
  }, [reqState, handleClose, data, refetchLoanRequests, form]);

  return (
    <Modal
      open={open}
      onCancel={() => handleClose()}
      footer={null}
      title={"Add Loan Request"}
      style={{ top: 20 }}
    >
      <Form
        layout="vertical"
        form={form}
        onFinish={handleSubmit}
        requiredMark={false}
      >
        <Form.Item
          rules={textInputValidationRules}
          name="full_name"
          label="Full Name"
        >
          <Input placeholder="Full Name" />
        </Form.Item>
        <Form.Item
          rules={generalValidationRules}
          name="loan_amount"
          label="Loan Amount"
        >
          <InputNumber min={1} placeholder="Loan Amount" className="w-full" />
        </Form.Item>
        <Form.Item
          rules={generalValidationRules}
          name="repayment_duration"
          label="Repayement Duration"
        >
          <InputNumber
            min={1}
            placeholder="Repayement Duration"
            className="w-full"
          />
        </Form.Item>

        <div className="flex justify-end">
          <Button htmlType="submit" loading={reqState === "loading"}>
            Add
          </Button>
        </div>
      </Form>
    </Modal>
  );
};