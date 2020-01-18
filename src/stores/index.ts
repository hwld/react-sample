import { combineReducers, configureStore } from '@reduxjs/toolkit';
import gameReducer from 'stores/game';

const reducer = combineReducers({
  game: gameReducer,
});

export type RootState = ReturnType<typeof reducer>;

const store = configureStore({ reducer });

export default store;
