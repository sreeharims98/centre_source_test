import styled from "styled-components";
import { rightArrow } from "../../../../common/assets/icons";

export const FoodItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  .left-sec {
    background: #f2f2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    width: 165px;
    margin: 0 1rem;
    .custom-date-btn {
      width: 100%;
      height: 45px;
      background: #27a12f;
      border: 1px solid #70707033;
      border-radius: 10px;
      color: #fff;
      cursor: pointer;
    }
    .custom-date-btn:hover {
      background: #44bb4c;
    }
  }
  .right-sec {
  }
`;

export const DateCompWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  img {
    width: 20px;
    margin: 10px;
  }
  .empty-check {
    width: 20px;
    height: 20px;
    border: 2px solid #44bb4c;
    border-radius: 2px;
    margin: 10px;
    cursor: pointer;
  }
  .date-btn {
    letter-spacing: 0.21px;
    color: #676565;
    background-color: none;
    outline: none;
    border: 1px solid #44bb4c;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .date-btn:focus {
    color: #fff;
    background-color: #44bb4c;
  }
`;

export const SelectFoodCompWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .food-time {
    color: #8c8c8c;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  .food-image {
    position: relative;
    img {
      width: 217px;
      height: 279px;
      object-fit: cover;
      border-radius: 20px;
    }
    .food-switch {
      position: absolute;
      bottom: 1rem;
      left: 15%;
    }
  }
  .food-name {
    color: #474747;
    font-weight: 500;
    margin-top: 1rem;
    text-align: center;
    width: 217px;
  }
`;
