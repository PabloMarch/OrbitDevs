import {
  SAY_HELLO
} from './actions';

const initialState = {
  text: 'Hello Reducer!!'
}

export const intro = (state = initialState, action) => {

    switch (action.type) {
      case SAY_HELLO:
        return Object.assign({}, state, { text: action.text });

      default:
        return state;

    }
}
