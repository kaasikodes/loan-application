import { Rule } from "antd/lib/form";

export const generalValidationRules: Rule[] = [
  { required: true, message: "Field is required!" },
];
export const generalValidationRulesOp: Rule[] = [
  { required: false, message: "Field is required!" },
];

export const textInputValidationRules: Rule[] = [
  ...generalValidationRules,
  { whitespace: true },
];
export const textInputValidationRulesOp: Rule[] = [
  ...generalValidationRulesOp,
  { whitespace: true },
];
