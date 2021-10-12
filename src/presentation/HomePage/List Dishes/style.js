import styled from "styled-components";

export const ListDishesWrapper = styled.div`
  padding: 0 4rem;
  .title-sec {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    letter-spacing: 0.38px;
    font-weight: 600;
    font-size: 25px;
  }
  .all-dishes {
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;

    .date-sec {
      font-weight: 500;
      margin: 1rem;
      color: #555555;
      font-size: 24px;
    }
    .food-card-sec {
      display: flex;
      align-items: start;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .food-card {
      margin: 1rem;
    }
  }
`;
