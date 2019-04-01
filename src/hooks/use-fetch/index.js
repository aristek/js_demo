import { useEffect, useMemo, useReducer, useRef } from "react";
import { fetchReducer, fetchState } from "./reducer";
import { getRequestParams } from "../../request";

export default ({
  request,
  args = {},
  params = {},
  prevent = false, // Used in tabs at most to prevent fetch. May be used for other cases.
  inputs = [],
} = {}) => {
  if (!request || typeof request !== "function")
    throw new Error(
      "Param `request` in `useFetch` is required. Also it should be a function.",
    );

  const mounted = useRef(false);
  const [state, dispatch] = useReducer(fetchReducer, fetchState);

  const queryParams = useMemo(() => {
    if (prevent) return undefined;
    return getRequestParams(params);
  }, [prevent, ...inputs]);

  useEffect(async () => {
    if (prevent) return undefined;

    dispatch({ type: "loading" });
    mounted.current = true;

    try {
      const response = await request({ ...args, params: queryParams });
      if (mounted.current) {
        dispatch({ type: "success", response });
        if (state.firstLoading) dispatch({ type: "firstLoading" });
      }
    } catch (error) {
      if (mounted.current) dispatch({ type: "failure", error });
    }

    return () => {
      mounted.current = false;
    };
  }, [prevent, ...inputs]);

  return [
    state.loading,
    state.data,
    { ...state.meta, firstLoading: state.firstLoading },
  ];
};
