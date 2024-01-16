import { GETUSERS } from "./Aciontype"

const initialState = {users:[]}

export const User_reducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case GETUSERS:
    return { ...state, users:payload }

  default:
    return state
  }
}
