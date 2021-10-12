import { Card } from "antd";
import React from "react";
import { underlineImg } from "../../common/assets/images";
import { useFoodItemsStore } from "../Select Your Plans/store";
import { ListDishesWrapper } from "./style";

const ListDishes = () => {
  const { Meta } = Card;
  const [{ allCheckedFood }, {}] = useFoodItemsStore();
  return (
    <ListDishesWrapper>
      <div className="title-sec">
        <span>Your Selected Dishes</span>
        <img src={underlineImg} alt="underline" />
      </div>
      <div className="all-dishes">
        {allCheckedFood.length > 0 ? (
          allCheckedFood.map((food) => (
            <div>
              <div className="date-sec">{food?.date}</div>

              <div className="food-card-sec">
                <div className="food-card">
                  <Card
                    style={{ width: 240 }}
                    cover={<img alt="example" src={food?.breakfast?.image} />}
                  >
                    <Meta
                      title="Break Fast"
                      description={food?.breakfast?.title}
                    />
                  </Card>
                </div>
                <div className="food-card">
                  <Card
                    style={{ width: 240 }}
                    cover={<img alt="example" src={food?.lunch?.image} />}
                  >
                    <Meta title="Lunch" description={food?.lunch?.title} />
                  </Card>
                </div>
                <div className="food-card">
                  <Card
                    style={{ width: 240 }}
                    cover={<img alt="example" src={food?.eveningmeal?.image} />}
                  >
                    <Meta
                      title="Evening Meal"
                      description={food?.eveningmeal?.title}
                    />
                  </Card>
                </div>
                <div className="food-card">
                  <Card
                    style={{ width: 240 }}
                    cover={<img alt="example" src={food?.supper?.image} />}
                  >
                    <Meta title="Supper" description={food?.supper?.title} />
                  </Card>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "2rem 0",
            }}
          >
            <h2>No Dishes Selected</h2>
          </div>
        )}
      </div>
    </ListDishesWrapper>
  );
};

export default ListDishes;
