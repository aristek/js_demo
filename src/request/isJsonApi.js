export default response =>
  response.headers["content-type"] &&
  response.headers["content-type"].includes("api+json");
