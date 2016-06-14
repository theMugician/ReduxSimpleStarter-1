import { SWITCH_UNIT } from '../actions/index';
import { FETCH_WEATHER } from '../actions/index';
const initialUnit = {unit: "c"};

export default function(state = initialUnit,action) {
  switch (action.type) {
  case SWITCH_UNIT:
    return action.payload;
  }
	case FETCH_WEATHER:
		return initialUnit;
	}
  return state;
}
