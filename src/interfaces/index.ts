import { ActionConstant, UserType } from "constants/constants";

export interface ActionType {
  type: ActionConstant;
  payload?: any;
}

export interface Users {
  name: string;
  address: string;
  email: string;
  type: UserType | "";
}

export interface EmailTemplete {
  sender: string;
  recipients: string[];
  subject: string;
  message: string;
}

export interface InitialStateType {
  users: Users[];
  emailTemplete: EmailTemplete;
}
