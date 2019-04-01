import React from "react";
import { useApi, useFetch } from "hooks";
import Feature from "./Feature";

const FeatureContainer = () => {
  const { api } = useApi();

  const [loading, data] = useFetch({
    request: api.getItems,
    inputs: [], // Use can also use hook inputs for re-fetching.
  });

  // Any component for loading process here...
  if (loading) return <Spinner />;

  return <Feature items={data} />
};

export default FeatureContainer;
