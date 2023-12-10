// store/actions/tollActions.ts

// Action Types
export const ADD_WAYPOINT = 'ADD_WAYPOINT';
export const REMOVE_WAYPOINT = 'REMOVE_WAYPOINT';
export const CLEAR_WAYPOINTS = 'CLEAR_WAYPOINTS';
export const CALCULATE_TOLL_REQUEST = 'CALCULATE_TOLL_REQUEST';
export const CALCULATE_TOLL_SUCCESS = 'CALCULATE_TOLL_SUCCESS';
export const CALCULATE_TOLL_FAILURE = 'CALCULATE_TOLL_FAILURE';

// Interfaces
interface Waypoint {
  id: number;
  // Add other properties as needed
}

interface CalculateTollSuccessPayload {
  tollDetails: any; // Update the type as per your API response structure
}

interface CalculateTollFailurePayload {
  error: string; // Update the type based on your error handling
}

// Action Creators
export const addWaypoint = (waypoint: Waypoint) => ({
  type: ADD_WAYPOINT as typeof ADD_WAYPOINT,
  payload: waypoint,
});

export const removeWaypoint = (waypointId: number) => ({
  type: REMOVE_WAYPOINT as typeof REMOVE_WAYPOINT,
  payload: waypointId,
});

export const clearWaypoints = () => ({
  type: CLEAR_WAYPOINTS as typeof CLEAR_WAYPOINTS,
});

export const calculateTollRequest = () => ({
  type: CALCULATE_TOLL_REQUEST as typeof CALCULATE_TOLL_REQUEST,
});

export const calculateTollSuccess = (payload: CalculateTollSuccessPayload) => ({
  type: CALCULATE_TOLL_SUCCESS as typeof CALCULATE_TOLL_SUCCESS,
  payload,
});

export const calculateTollFailure = (payload: CalculateTollFailurePayload) => ({
  type: CALCULATE_TOLL_FAILURE as typeof CALCULATE_TOLL_FAILURE,
  payload,
});
