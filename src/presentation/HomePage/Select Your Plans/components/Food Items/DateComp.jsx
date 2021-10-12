import React, { useState } from "react";
import { veridfiedIco } from "../../../../common/assets/icons";
import { useFoodItemsStore } from "../../store";
import { DateCompWrapper } from "./style";

const DateComp = ({ date, isChecked }) => {
  const [
    { singleDate, clickedDate },
    { getFoodItems, setAllCheckedFood, setClickedDate },
  ] = useFoodItemsStore();

  const [check, setcheck] = useState(isChecked);

  return (
    <DateCompWrapper>
      {check ? (
        <img src={veridfiedIco} alt="check" />
      ) : (
        <div
          className="empty-check"
          onClick={() => {
            setcheck(true);
            setAllCheckedFood(singleDate);
          }}
        />
      )}
      <button
        className="date-btn"
        onClick={() => {
          if (clickedDate === date) {
          } else {
            setClickedDate(date);
            getFoodItems();
          }
        }}
      >
        {date}
      </button>
    </DateCompWrapper>
  );
};

export default DateComp;
