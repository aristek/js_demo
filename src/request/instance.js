import axios from "axios";
import qs from "qs";
import isJsonApi from "./isJsonApi";
import prepareJsonApi from "./prepareJsonApi";

const request = async ({ method, url, params, data }) => {
  try {
    const response = await axios({
      method,
      url,
      params,
      data,
      baseURL: process.env.REACT_APP_API_URL,
      headers: {
        Accept: "application/json",
        Authorization: localStorage.getItem("token"),
      },
      paramsSerializer: paramsObj => qs.stringify(paramsObj),
    });

    return isJsonApi(response)
      ? {
        ...response,
        data: {
          data: prepareJsonApi(response.data.data, response.data.included),
          meta: response.data.meta,
        },
      }
      : response;
  } catch (error) {
    // Validation, authentication, authorization and other logic here
  }
};

export default {
  get: args => request({ method: "get", ...args }),
  post: args => request({ method: "post", ...args }),
  put: args => request({ method: "put", ...args }),
  patch: args => request({ method: "patch", ...args }),
  delete: args => request({ method: "delete", ...args }),
};
