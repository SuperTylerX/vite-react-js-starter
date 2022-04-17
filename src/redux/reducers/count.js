import { INCREMENT, DECREMENT } from "../constant";

const initState = {
  number: 0,
};

export default function countReducer(preState = initState, action = {}) {
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return {
        number: preState.number + data,
      };
    case DECREMENT:
      return {
        number: preState.number - data,
      };
    default:
      return preState;
  }
}
