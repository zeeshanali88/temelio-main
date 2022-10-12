import { InitialStateType } from "interfaces";

const initialState: InitialStateType = {
  users: [],
  emailTemplete: { sender: '', recipients: [], subject: "", message: "" },
};

export default initialState;
