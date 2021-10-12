import { get } from "../common/remote/base_api";

export const getFoodItems = (params) => {
  return get("/recipes/random", params);
};
