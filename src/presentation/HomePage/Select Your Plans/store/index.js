import { createHook, createStore, defaults } from "react-sweet-state";
import { actions } from "./actions";
import { initialState } from "./initialState";

defaults.devtools = true;
const FoodItemsStore = createStore({
  name: "FoodItemsStore",
  initialState,
  actions,
});

export const useFoodItemsStore = createHook(FoodItemsStore, {
  selector: (state) => state,
});
