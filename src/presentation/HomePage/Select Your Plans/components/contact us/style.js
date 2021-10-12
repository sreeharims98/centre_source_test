import styled from "styled-components";
import { contactUsWall } from "../../../../common/assets/images";

export const ContactUsWrapper = styled.div`
  background: url(${contactUsWall}) 0% 0% no-repeat padding-box;
  min-height: 320px;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .title {
    color: #ffffff;
    font-weight: 500;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  .contactus-form {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 226px;
    width: 100%;
    max-width: 720px;
    .left-sec {
      background: #fff;
      height: 100%;
      width: 100%;
      padding: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      /* flex-wrap: wrap; */
      .label {
        font-weight: 500;
      }
      input {
        border: none;
        outline: none;
        max-width: 338px;
        width: 100%;
        height: 38px;
        background: #f2f2f2 0% 0% no-repeat padding-box;
        border: 1px solid #ffffff;
        border-radius: 1px;
        margin: 0.5rem 0;
      }
    }
    .right-sec {
      width: 20%;
      background: #27a12f;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;
