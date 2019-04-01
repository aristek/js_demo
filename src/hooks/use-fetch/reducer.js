export const fetchState = {
  firstLoading: true,
  loading: true,
  data: undefined,
  meta: undefined,
  error: undefined,
};

export const fetchReducer = (state, action) => {
  switch (action.type) {
    case "firstLoading":
      return {
        ...state,
        firstLoading: false,
      };
    case "loading":
      return {
        ...state,
        loading: true,
      };
    case "success":
      return {
        ...state,
        loading: false,
        data: action.response.data.data,
        meta: action.response.data.meta,
      };
    case "failure":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
