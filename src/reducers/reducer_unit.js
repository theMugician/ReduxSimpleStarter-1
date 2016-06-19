import { SWITCH_TEMP_UNITS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
      case SWITCH_TEMP_UNITS:
        console.log('Hello from reducer_unit: ', action.payload);
        return [...state, action.payload ];
      }

  return state;
}