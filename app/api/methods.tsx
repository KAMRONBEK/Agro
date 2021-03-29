import { ITransactionDetailsParams } from "types";

// CLICK METHODS
export const CATEGORY_LIST = "category.list";

export const SERVICE_LIST = "service.list";

export const PAYMENT_DATA = "payment.data";

export const TOKEN_CREATE = "token.create";

export const TOKEN_VERIFY = "token.verify";

export const TOKEN_REMOVE = "token.remove";

// QWERTY METHODS
export const SEND_SMS_CODE = "/api/sms";

export const CONFIRM_PHONE = "/api/accept";

export const SIGNUP = "/api/register";

export const LOGIN = "/api/login";

export const LIST_CARDS = "/api/cards";

export const TOKEN_CREATE_QWERTY = "/api/cards";

export const TOKEN_VERIFY_QWERTY = "/api/cards/accept";

export const PAYMENT = "/api/transactions/payByToken";

export const TRANSACTIONS = "/api/transactions";

export const TRANSACTION_DETAILS = ({ id }: ITransactionDetailsParams) => `/api/transactions/show/${id}`;

export const TRANSFER_CARD_TOKEN = "/api/transfers/tokenCard";

export const CARD_INFO = "/api/cards/info";

export const CARD_LOGO = "/api/cards/logo";

export const TRANSFER_INFO = "/api/transfers/info";

export const CARDS_BALANCE = "/api/cards/balance";

export const CREATE_VISA_VIRTUAL = "/api/visas";

export const CREATE_SUM_VISA_VIRTUAL = "/api/visas/createUz";

export const CREATE_VISA_DUPLICATE = "/api/visas/dublicate";

export const VISA_ACTIVATION = "/api/visas/activation";

export const VISA_CARD_INFO = "/api/visas/info";

export const VISA_CARD_BALANCE = ({ id }) => `/api/visas/balance?id=${id}`;

export const USER_DATA = "/api/users";

export const BRANCHES = "/api/branches";

export const REGIONS = "/api/regions";

export const BANKOMATS = (id) => `/api/bankomats?region_id=${id}`;

export const NEWS = "/api/news/index";

export const NEWSSINGLE = (id) => `/api/news/view?id=${id}`;

export const ACTIVE_DEPOSITS = "/api/deposit/user/active";

export const ALL_DEPOSITS = "/api/deposit/products";

export const DEPOSIT_INFO = (code) => `/api/deposit/product/${code}`;

export const CREATE_DEPOSIT = "/api/deposit/create";
