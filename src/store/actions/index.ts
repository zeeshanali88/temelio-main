import { ActionConstant} from "constants/constants";
import { EmailTemplete } from "interfaces";

// export const setNonProfitUsers = (payload: NonProfitUsers[]) => {
//     return { type: ActionConstant.SET_NON_PROFIT_USERS, payload }
// }

// export const setFoundationUsers = (payload: FoundationUsers[]) => {
//     return { type: ActionConstant.SET_FOUNDATION_USERS, payload }
// }

export const setEmailTemplete = (payload: EmailTemplete) => {
    return { type: ActionConstant.SET_EMAIL_TEMPLETE, payload }
}
