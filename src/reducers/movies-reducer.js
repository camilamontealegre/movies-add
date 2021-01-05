const initialState = {
    dramaMovies: [],
    allMovies: []
  };
  
  export default function moviesReducer(state = initialState, action) {
    const { payload, type } = action;
  
    switch (type) {
      case "ADD_MOVIE":
        return {
          ...state,
          allMovies: [...state.allMovies, payload]
        };
      default:
        return state;
    }
  }