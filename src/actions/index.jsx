import * as types from './../constants/ActionTypes';
import constants from './../constants';
import v4 from 'uuid/v4';

export const receiveWorkout = (title, localWorkoutId) => ({
  type: types.RECEIVE_WORKOUT,
  title,
  workoutId: localWorkoutId
});
