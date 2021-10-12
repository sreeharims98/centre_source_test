import { Col, Row } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { useFoodItemsStore } from "../../store";
import CalenderModal from "../calenderModal/CalenderModal";
import DateComp from "./DateComp";
import SelectFoodComp from "./SelectFoodComp";
import { FoodItemsWrapper } from "./style";

const FoodItems = () => {
  const [
    { AllFoodItems, selectedDate },
    { setCalenderModal, getFoodItems, resetAllCheckedFood },
  ] = useFoodItemsStore();

  useEffect(() => {
    resetAllCheckedFood();
    getFoodItems();
  }, []);

  return (
    <FoodItemsWrapper>
      <div className="left-sec">
        <DateComp date={selectedDate} isChecked={false} />
        <DateComp
          date={moment(selectedDate, "DD/MM/YYYY")
            .add(1, "days")
            .format("DD/MM/YYYY")}
          isChecked={false}
        />
        <DateComp
          date={moment(selectedDate, "DD/MM/YYYY")
            .add(2, "days")
            .format("DD/MM/YYYY")}
          isChecked={false}
        />
        <DateComp
          date={moment(selectedDate, "DD/MM/YYYY")
            .add(3, "days")
            .format("DD/MM/YYYY")}
          isChecked={false}
        />
        <DateComp
          date={moment(selectedDate, "DD/MM/YYYY")
            .add(4, "days")
            .format("DD/MM/YYYY")}
          isChecked={false}
        />
        <DateComp
          date={moment(selectedDate, "DD/MM/YYYY")
            .add(5, "days")
            .format("DD/MM/YYYY")}
          isChecked={false}
        />

        <button
          className="custom-date-btn"
          onClick={() => setCalenderModal(true)}
        >
          Select <br />
          Custom Date
        </button>
      </div>
      <div className="right-sec">
        <Row gutter={25} justify={"center"}>
          <Col lg={6} md={12} sm={24}>
            <SelectFoodComp
              data={{ a: AllFoodItems[0], b: AllFoodItems[1] }}
              name="breakfast"
            />
          </Col>
          <Col lg={6} md={12} sm={24}>
            <SelectFoodComp
              data={{ a: AllFoodItems[2], b: AllFoodItems[3] }}
              name="lunch"
            />
          </Col>
          <Col lg={6} md={12} sm={24}>
            <SelectFoodComp
              data={{ a: AllFoodItems[4], b: AllFoodItems[5] }}
              name="eveningmeal"
            />
          </Col>
          <Col lg={6} md={12} sm={24}>
            <SelectFoodComp
              data={{ a: AllFoodItems[6], b: AllFoodItems[7] }}
              name="supper"
            />
          </Col>
        </Row>
      </div>
      <CalenderModal />
    </FoodItemsWrapper>
  );
};

export default FoodItems;
