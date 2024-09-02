import { WeatherActions } from '../actions/weatherActions';

interface WeatherState {
  loading: boolean;
  weather: unknown | null;
  error: string | null;
}

const initialState: WeatherState = {
  loading: false,
  weather: null,
  error: null,
};

const weatherReducer = (state = initialState, action: { type: WeatherActions; payload: unknown; }) => {
  switch (action.type) {

    default:
      return state;
  }
};

export default weatherReducer;