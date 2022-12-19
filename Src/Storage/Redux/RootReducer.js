const initialState = {
    user: {},
    tripData:{},
    isLoggedIn: false,
    isDarkTheme: false,
    
  };
  
  export const RootReducer = (state = initialState, action) => {
    switch (action.type) {
     case 'SET_USER':
        state.user = action.payload;
        state.isLoggedIn = true;
        return {
          ...state,
          user: state.user,
          isLoggedIn: state.isLoggedIn,
        };
      case 'LOGOUT':
        state.user = {};
        state.isLoggedIn = false;
        return {
          ...state,
        };
        case 'SET_TRIP_DATA':
          state.tripData=action.payload;
        return {
          ...state,
          tripData:state.tripData
        }

      default:
        return state;
    }
  };
  