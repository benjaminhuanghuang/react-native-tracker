import { DEMO_ACTION } from '../actionTypes';

// return a new state
const AppReducer = (state = [], action) => {
  switch (action.type) {
    case DEMO_ACTION:
      console.log(`Action: ${action}, State: ${state}`);
      return state;

    default:
      return state;
  }
};

export default AppReducer;