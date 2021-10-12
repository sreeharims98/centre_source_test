import moment from "moment";
import { getFoodItems } from "../../../../infrastructure/Food API";

export const actions = {
  setCalenderModal:
    (value) =>
    ({ setState }) => {
      setState({ calenderModal: value });
    },
  onCalenderChange:
    (e) =>
    ({ setState }) => {
      setState({ calenderDate: moment(e) });
      setState({ selectedDate: moment(e).format("DD/MM/YYYY") });
      setState({ clickedDate: moment(e).format("DD/MM/YYYY") });
    },
  setClickedDate:
    (date) =>
    ({ setState }) => {
      setState({ clickedDate: date });
    },

  getFoodItems:
    () =>
    async ({ setState, getState }) => {
      try {
        const params = {
          apiKey: "9219c00999a54e2fb9e03a1d61fef28f",
          number: 8,
        };
        const res = await getFoodItems(params);
        setState({ AllFoodItems: res.recipes });

        const date = getState().clickedDate;
        const breakfast = {
          title: res.recipes[0].title,
          image: res.recipes[0].image,
        };
        const lunch = {
          title: res.recipes[2].title,
          image: res.recipes[2].image,
        };
        const eveningmeal = {
          title: res.recipes[4].title,
          image: res.recipes[4].image,
        };
        const supper = {
          title: res.recipes[6].title,
          image: res.recipes[6].image,
        };
        setState({
          singleDate: {
            date: date,
            breakfast: breakfast,
            lunch: lunch,
            eveningmeal: eveningmeal,
            supper: supper,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  setSingleDate:
    (value) =>
    ({ setState }) => {
      setState({ singleDate: value });
    },
  setAllCheckedFood:
    (value) =>
    ({ setState, getState }) => {
      let all = getState().allCheckedFood;
      all.push(value);
      setState({ allCheckedFood: all });
    },
  resetAllCheckedFood:
    () =>
    ({ setState }) => {
      let all = [];
      setState({ allCheckedFood: all });
    },
};
