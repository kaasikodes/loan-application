import { APP_ROUTES } from "./appRoutes";

export const API_URL = "http://localhost:8000";
export { APP_ROUTES };
export const dummyInstallments = [
  {
    ID: "1",
    TRANSACTION_ID: "TRANS00120230801042657",
    LOAN_BALANCE: "600000.00",
    MONTH_COUNT: "1",
    EXPECTED_REPAYMENT_AMOUNT: "100000.00",
    INTEREST: "9000.00",
    TOTAL_REPAYMENT_AMOUNT: "109000.00",
  },
  {
    ID: "2",
    TRANSACTION_ID: "TRANS00120230801042657",
    LOAN_BALANCE: "500000.00",
    MONTH_COUNT: "2",
    EXPECTED_REPAYMENT_AMOUNT: "100000.00",
    INTEREST: "7500.00",
    TOTAL_REPAYMENT_AMOUNT: "107500.00",
  },
  {
    ID: "3",
    TRANSACTION_ID: "TRANS00120230801042657",
    LOAN_BALANCE: "400000.00",
    MONTH_COUNT: "3",
    EXPECTED_REPAYMENT_AMOUNT: "100000.00",
    INTEREST: "6000.00",
    TOTAL_REPAYMENT_AMOUNT: "106000.00",
  },
  {
    ID: "4",
    TRANSACTION_ID: "TRANS00120230801042657",
    LOAN_BALANCE: "300000.00",
    MONTH_COUNT: "4",
    EXPECTED_REPAYMENT_AMOUNT: "100000.00",
    INTEREST: "4500.00",
    TOTAL_REPAYMENT_AMOUNT: "104500.00",
  },
];
export const dummyLoanRequests = [
  {
    ID: "1",
    TRANSACTION_ID: "TRANS00120230801042657",
    FULL_NAME: "MIKE AFOLABI",
    LOAN_AMOUNT: "600000.00",
    REPAYMENT_DURATION: "6",
    CREATED_TIME: "2023-08-01 15:26:57",
  },
  {
    ID: "2",
    TRANSACTION_ID: "TRANS00220230802084517",
    FULL_NAME: "JOHN SMITH",
    LOAN_AMOUNT: "450000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-02 07:45:17",
  },
  {
    ID: "3",
    TRANSACTION_ID: "TRANS00320230802084521",
    FULL_NAME: "OSU JAY",
    LOAN_AMOUNT: "450000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-02 07:45:21",
  },
  {
    ID: "4",
    TRANSACTION_ID: "TRANS00420230802085012",
    FULL_NAME: "EMMANUEL JAFAR",
    LOAN_AMOUNT: "900000.00",
    REPAYMENT_DURATION: "7",
    CREATED_TIME: "2023-08-02 07:50:12",
  },
  {
    ID: "5",
    TRANSACTION_ID: "TRANS00520230803084856",
    FULL_NAME: "BADE UNIQUE",
    LOAN_AMOUNT: "600000.00",
    REPAYMENT_DURATION: "5",
    CREATED_TIME: "2023-08-03 09:48:56",
  },
  {
    ID: "6",
    TRANSACTION_ID: "TRANS00620230803085122",
    FULL_NAME: "HAMMED IDRIS",
    LOAN_AMOUNT: "1800000.00",
    REPAYMENT_DURATION: "6",
    CREATED_TIME: "2023-08-03 09:51:22",
  },
  {
    ID: "7",
    TRANSACTION_ID: "TRANS00720230803090201",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 10:02:01",
  },
  {
    ID: "8",
    TRANSACTION_ID: "TRANS00820230803093637",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 10:36:37",
  },
  {
    ID: "9",
    TRANSACTION_ID: "TRANS00920230803103854",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 11:38:54",
  },
  {
    ID: "10",
    TRANSACTION_ID: "TRANS01020230803103943",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 11:39:43",
  },
  {
    ID: "11",
    TRANSACTION_ID: "TRANS01120230803104005",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "7000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 11:40:05",
  },
  {
    ID: "12",
    TRANSACTION_ID: "TRANS01220230803110103",
    FULL_NAME: "",
    LOAN_AMOUNT: "200000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 12:01:03",
  },
  {
    ID: "13",
    TRANSACTION_ID: "TRANS01320230803112401",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000.00",
    REPAYMENT_DURATION: "6",
    CREATED_TIME: "2023-08-03 12:24:01",
  },
  {
    ID: "14",
    TRANSACTION_ID: "TRANS01420230803113729",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 12:37:29",
  },
  {
    ID: "15",
    TRANSACTION_ID: "TRANS01520230803113941",
    FULL_NAME: "MTN NIG LIMITED",
    LOAN_AMOUNT: "8000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 12:39:41",
  },
  {
    ID: "16",
    TRANSACTION_ID: "TRANS01620230803114007",
    FULL_NAME: "MTN NIG LIMITED",
    LOAN_AMOUNT: "8000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 12:40:07",
  },
  {
    ID: "17",
    TRANSACTION_ID: "TRANS01720230803114557",
    FULL_NAME: "MTN NIG LIMITED",
    LOAN_AMOUNT: "8000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 12:45:57",
  },
  {
    ID: "18",
    TRANSACTION_ID: "TRANS01820230803115629",
    FULL_NAME: "EAGLE FLOUR MILL PLC",
    LOAN_AMOUNT: "7000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 12:56:29",
  },
  {
    ID: "19",
    TRANSACTION_ID: "TRANS01920230803115806",
    FULL_NAME: "FRANK AGU",
    LOAN_AMOUNT: "6000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 12:58:06",
  },
  {
    ID: "20",
    TRANSACTION_ID: "TRANS02020230803123415",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 13:34:15",
  },
  {
    ID: "21",
    TRANSACTION_ID: "TRANS02120230803125220",
    FULL_NAME: "PETER IHAZA",
    LOAN_AMOUNT: "30000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 13:52:20",
  },
  {
    ID: "22",
    TRANSACTION_ID: "TRANS02220230803010418",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 14:04:18",
  },
  {
    ID: "23",
    TRANSACTION_ID: "TRANS02320230803010723",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 14:07:23",
  },
  {
    ID: "24",
    TRANSACTION_ID: "TRANS02420230803021905",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 15:19:05",
  },
  {
    ID: "25",
    TRANSACTION_ID: "TRANS02520230803021913",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 15:19:13",
  },
  {
    ID: "26",
    TRANSACTION_ID: "TRANS02620230803021943",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 15:19:43",
  },
  {
    ID: "27",
    TRANSACTION_ID: "TRANS02720230803022240",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 15:22:40",
  },
  {
    ID: "28",
    TRANSACTION_ID: "TRANS02820230803022309",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 15:23:09",
  },
  {
    ID: "29",
    TRANSACTION_ID: "TRANS02920230803024415",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 15:44:15",
  },
  {
    ID: "30",
    TRANSACTION_ID: "TRANS02920230803024415",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 15:44:15",
  },
  {
    ID: "31",
    TRANSACTION_ID: "TRANS03120230803024415",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 15:44:15",
  },
  {
    ID: "32",
    TRANSACTION_ID: "TRANS03220230803024415",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 15:44:15",
  },
  {
    ID: "33",
    TRANSACTION_ID: "TRANS03320230803024416",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 15:44:16",
  },
  {
    ID: "34",
    TRANSACTION_ID: "TRANS03420230803030451",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 16:04:51",
  },
  {
    ID: "35",
    TRANSACTION_ID: "TRANS03520230803030655",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 16:06:55",
  },
  {
    ID: "36",
    TRANSACTION_ID: "TRANS03620230803030655",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 16:06:55",
  },
  {
    ID: "37",
    TRANSACTION_ID: "TRANS03720230803031500",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "33",
    CREATED_TIME: "2023-08-03 16:15:00",
  },
  {
    ID: "38",
    TRANSACTION_ID: "TRANS03820230803031513",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "200.00",
    REPAYMENT_DURATION: "33",
    CREATED_TIME: "2023-08-03 16:15:13",
  },
  {
    ID: "39",
    TRANSACTION_ID: "TRANS03920230803031537",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "200.00",
    REPAYMENT_DURATION: "3",
    CREATED_TIME: "2023-08-03 16:15:37",
  },
  {
    ID: "40",
    TRANSACTION_ID: "TRANS04020230803031602",
    FULL_NAME: "LLOYD",
    LOAN_AMOUNT: "33.00",
    REPAYMENT_DURATION: "44",
    CREATED_TIME: "2023-08-03 16:16:02",
  },
  {
    ID: "41",
    TRANSACTION_ID: "TRANS04120230803031615",
    FULL_NAME: "LLOYD",
    LOAN_AMOUNT: "33.00",
    REPAYMENT_DURATION: "45",
    CREATED_TIME: "2023-08-03 16:16:15",
  },
  {
    ID: "42",
    TRANSACTION_ID: "TRANS04220230803031835",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "120000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 16:18:35",
  },
  {
    ID: "43",
    TRANSACTION_ID: "TRANS04320230803031839",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "120000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 16:18:39",
  },
  {
    ID: "44",
    TRANSACTION_ID: "TRANS04420230803032003",
    FULL_NAME: "IIII",
    LOAN_AMOUNT: "777.00",
    REPAYMENT_DURATION: "5",
    CREATED_TIME: "2023-08-03 16:20:03",
  },
  {
    ID: "45",
    TRANSACTION_ID: "TRANS04520230803032226",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 16:22:26",
  },
  {
    ID: "46",
    TRANSACTION_ID: "TRANS04620230803033657",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 16:36:57",
  },
  {
    ID: "47",
    TRANSACTION_ID: "TRANS04720230803034353",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 16:43:53",
  },
  {
    ID: "48",
    TRANSACTION_ID: "TRANS04820230803034359",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 16:43:59",
  },
  {
    ID: "49",
    TRANSACTION_ID: "TRANS04920230803034401",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 16:44:01",
  },
  {
    ID: "50",
    TRANSACTION_ID: "TRANS05020230803034403",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 16:44:03",
  },
  {
    ID: "51",
    TRANSACTION_ID: "TRANS05120230803040613",
    FULL_NAME: "ADLAS NIG LTD",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 17:06:13",
  },
  {
    ID: "52",
    TRANSACTION_ID: "TRANS05220230803050628",
    FULL_NAME: "",
    LOAN_AMOUNT: "10000.00",
    REPAYMENT_DURATION: "34",
    CREATED_TIME: "2023-08-03 18:06:28",
  },
  {
    ID: "53",
    TRANSACTION_ID: "TRANS05320230803050637",
    FULL_NAME: "",
    LOAN_AMOUNT: "10000.00",
    REPAYMENT_DURATION: "34",
    CREATED_TIME: "2023-08-03 18:06:37",
  },
  {
    ID: "54",
    TRANSACTION_ID: "TRANS05420230803050645",
    FULL_NAME: "",
    LOAN_AMOUNT: "10000.00",
    REPAYMENT_DURATION: "34",
    CREATED_TIME: "2023-08-03 18:06:45",
  },
  {
    ID: "55",
    TRANSACTION_ID: "TRANS05520230803050655",
    FULL_NAME: "",
    LOAN_AMOUNT: "10000.00",
    REPAYMENT_DURATION: "34",
    CREATED_TIME: "2023-08-03 18:06:55",
  },
  {
    ID: "56",
    TRANSACTION_ID: "TRANS05620230803051315",
    FULL_NAME: "ADLAS NIG LIMITED",
    LOAN_AMOUNT: "2000000.00",
    REPAYMENT_DURATION: "12",
    CREATED_TIME: "2023-08-03 18:13:15",
  },
];
