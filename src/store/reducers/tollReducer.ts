// store/reducers/tollReducer.ts

import {
    ADD_WAYPOINT,
    REMOVE_WAYPOINT,
    CLEAR_WAYPOINTS,
    CALCULATE_TOLL_REQUEST,
    CALCULATE_TOLL_SUCCESS,
    CALCULATE_TOLL_FAILURE,
  } from '../actions/tollActions';
  
  interface TollState {
    waypoints: any[]; // Update the type based on your waypoint structure
    loading: boolean;
    tollDetails: any[]; // Update the type based on your API response structure
    error: string | null;
  }
  
  const initialState: TollState = {
    waypoints: [],
    loading: false,
    tollDetails: [],
    error: null,
  };
  
  type TollAction =
    | ReturnType<typeof addWaypoint>
    | ReturnType<typeof removeWaypoint>
    | ReturnType<typeof clearWaypoints>
    | ReturnType<typeof calculateTollRequest>
    | ReturnType<typeof calculateTollSuccess>
    | ReturnType<typeof calculateTollFailure>;
  
  const tollReducer = (state: TollState = initialState, action: TollAction): TollState => {
    switch (action.type) {
      case ADD_WAYPOINT:
        return {
          ...state,
          waypoints: [...state.waypoints, action.payload],
        };
  
      case REMOVE_WAYPOINT:
        return {
          ...state,
          waypoints: state.waypoints.filter((waypoint) => waypoint.id !== action.payload),
        };
  
      case CLEAR_WAYPOINTS:
        return {
          ...state,
          waypoints: [],
        };
  
      case CALCULATE_TOLL_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case CALCULATE_TOLL_SUCCESS:
        return {
          ...state,
          loading: false,
          tollDetails: action.payload.tollDetails,
        };
  
      case CALCULATE_TOLL_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
        };
  
      default:
        return state;
    }
  };
  
  export default tollReducer;
  