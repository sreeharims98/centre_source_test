import { message } from "antd";
import React from "react";
import { useHistory } from "react-router";
import { veridfiedIco } from "../../common/assets/icons";
import { underlineImg } from "../../common/assets/images";
import { routes } from "../../common/routes";
import ContactUs from "./components/contact us";
import FoodItems from "./components/Food Items";
import { useFoodItemsStore } from "./store";
import { TopSecWrapper } from "./style";

const SelectYourPlan = () => {
  let history = useHistory();
  const [{ allCheckedFood }, {}] = useFoodItemsStore();
  return (
    <>
      <TopSecWrapper>
        <div className="title-sec">
          <span>Choose Your Dishes</span>
          <img src={underlineImg} alt="underline" />
        </div>
        <div className="sub-title-sec">
          As per your recomented calorie, Choose your dishes from below
        </div>
        <div className="choose-def-btn">
          <button>
            <img src={veridfiedIco} alt="check" />
            Choose Default Menu
          </button>
        </div>
        <FoodItems />
        <div className="proceed-btn">
          <button
            onClick={() =>
              allCheckedFood.length > 0
                ? history.push(routes.LIST_DISHES)
                : message.warning("Please Select a Date")
            }
          >
            Proceed
          </button>
        </div>
      </TopSecWrapper>
      <ContactUs />
    </>
  );
};

export default SelectYourPlan;
