// Some manipulations over jsonapi format to prepare result params.
export default params => {
  // Common primitives used on js part.
  // More info: https://github.com/aristek/rails_demo#jsonapi-filtering
  const { filter, sort, page, perPage, include } = params;
  const requestParams = {};

  // Some transform logic here...

  return requestParams;
};
