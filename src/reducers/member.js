import Store from '../store/member';

export const initialState = Store;

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_LOGIN': {
      if (action.user) {
        return {
          ...state,
          loading: false,
          error: null,
          uid: action.data.id,
          email: action.data.email,
          emailVerified: action.data.emailVerified,
        };
      }
      return initialState;
    }
    case 'USER_DETAILS_UPDATE': {
      if (action.user) {
        return {
          ...state,
          loading: false,
          error: null,
          firstName: action.user.name,
          lastName: action.user.lastName,
          signedUp: action.user.signedUp,
          role: action.user.role,
        };
      }
      return initialState;
    }
    case 'USER_ERROR': {
      if (action.data) {
        return {
          ...state,
          loading: false,
          error: action.data,
        };
      }
      return initialState;
    }
    case 'USER_RESET': {
      return initialState;
    }
    default:
      return state;
  }
}
