import {
  SAY_HELLO
} from './actions';

const initialState = {
  text: 'Hello Reducer!!'
}

export const orbital = (state = initialState, action) => {

    switch (action.type) {
      case SAY_HELLO:
        return Object.assign({}, state, { text: action.text });

      default:
        return state;

    }
}
