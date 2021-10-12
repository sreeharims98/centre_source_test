import moment from "moment";

export const initialState = {
  calenderModal: false,
  calenderDate: moment(),
  selectedDate: moment().format("DD/MM/YYYY"),
  clickedDate: moment().format("DD/MM/YYYY"),
  AllFoodItems: [],

  singleDate: {},

  allCheckedFood: [],
};
