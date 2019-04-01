// Here we preparing jsonapi model for front usage.
const prepareModel = (data, included = [], originalData) => {
  const interDic = {
    id: data.id,
    type: data.type,
    ...data.attributes,
    ...data.meta,
  };

  if (data.relationships) {
    // Relation transform logic...
  }

  return interDic;
};

export default (data, included) => {
  const prepare = model => prepareModel(model, included, model);

  return Array.isArray(data) ? data.map(prepare) : prepare(data);
};
