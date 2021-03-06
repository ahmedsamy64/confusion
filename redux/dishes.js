
import * as ActionTypes from './ActionTypes';

//reducer function recives the current state and the action to generate the next state..
//this is a pure function that doesnt mutate (change) the state and dont modify it

export const dishes = (state = { isLoading: true,
                                 errMess: null,
                                 dishes:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};