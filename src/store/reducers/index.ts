import { InitialStateType, ActionType } from "interfaces";
import { ActionConstant } from "constants/constants";

const reducer = (state: InitialStateType, actions: ActionType): InitialStateType => {
  switch (actions.type) {
    case ActionConstant.SET_USERS:
      return {
        ...state,
        users: actions.payload,
      };
    case ActionConstant.SET_EMAIL_TEMPLETE:
      return {
        ...state,
        emailTemplete: actions.payload,
      };
    default:
      return state;
  }
};

export default reducer;
