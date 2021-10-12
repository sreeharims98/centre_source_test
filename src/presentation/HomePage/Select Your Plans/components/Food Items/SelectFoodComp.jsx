import { Switch } from "antd";
import React, { useState } from "react";
import { useFoodItemsStore } from "../../store";
import { SelectFoodCompWrapper } from "./style";
import "./switch.css";

const SelectFoodComp = ({ data, name }) => {
  const [switchValue, setswitchValue] = useState(false);

  const [{ singleDate }, { setSingleDate }] = useFoodItemsStore();

  return (
    <SelectFoodCompWrapper>
      <div className="food-time">
        {name === "breakfast"
          ? "Break Fast"
          : name === "lunch"
          ? "Lunch"
          : name === "eveningmeal"
          ? "Evening Meal"
          : "Supper"}
      </div>
      <div className="food-image">
        <img
          src={switchValue ? data?.b?.image : data?.a?.image}
          alt="food imag"
          width="100px"
        />
        <div className="food-switch">
          <Switch
            checkedChildren="A"
            unCheckedChildren="B"
            onChange={(e) => {
              setswitchValue(e);
              if (e) {
                if (name === "breakfast") {
                  setSingleDate({
                    ...singleDate,
                    breakfast: { title: data?.b?.title, image: data?.b?.image },
                  });
                } else if (name === "lunch") {
                  setSingleDate({
                    ...singleDate,
                    lunch: { title: data?.b?.title, image: data?.b?.image },
                  });
                } else if (name === "eveningmeal") {
                  setSingleDate({
                    ...singleDate,
                    eveningmeal: {
                      title: data?.b?.title,
                      image: data?.b?.image,
                    },
                  });
                } else if (name === "supper") {
                  setSingleDate({
                    ...singleDate,
                    supper: { title: data?.b?.title, image: data?.b?.image },
                  });
                }
              } else {
                if (name === "breakfast") {
                  setSingleDate({
                    ...singleDate,
                    breakfast: { title: data?.a?.title, image: data?.a?.image },
                  });
                } else if (name === "lunch") {
                  setSingleDate({
                    ...singleDate,
                    lunch: { title: data?.a?.title, image: data?.a?.image },
                  });
                } else if (name === "eveningmeal") {
                  setSingleDate({
                    ...singleDate,
                    eveningmeal: {
                      title: data?.a?.title,
                      image: data?.a?.image,
                    },
                  });
                } else if (name === "supper") {
                  setSingleDate({
                    ...singleDate,
                    supper: { title: data?.a?.title, image: data?.a?.image },
                  });
                }
              }
            }}
          />
        </div>
      </div>
      <div className="food-name">
        {switchValue ? data?.b?.title : data?.a?.title}
      </div>
    </SelectFoodCompWrapper>
  );
};

export default SelectFoodComp;
