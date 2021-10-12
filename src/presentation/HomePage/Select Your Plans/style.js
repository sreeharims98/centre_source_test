import styled from "styled-components";

export const TopSecWrapper = styled.div`
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
  .sub-title-sec {
    color: #646464;
    font-weight: 500;
    font-size: medium;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  .choose-def-btn {
    margin: 2rem;
    display: flex;
    align-items: center;
    justify-content: end;
    button {
      cursor: pointer;
      img {
        width: 20px;
        margin: 0 10px;
      }
      height: 44px;
      width: 231px;
      border: none;
      outline: none;
      background: #f6e200;
      box-shadow: 0px 3px 6px #00000012;
      border-radius: 15px;
      letter-spacing: 0.18px;
      color: #000000;
      font-weight: 500;
    }
    button:hover {
      background: rgb(204, 187, 2);
    }
  }
  .proceed-btn {
    margin: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      cursor: pointer;
      height: 44px;
      width: 231px;
      border: none;
      outline: none;
      background: #27a12f;
      border-radius: 25px;
      box-shadow: 0px 3px 6px #00000012;
      letter-spacing: 0.18px;
      color: #fff;
      font-weight: 500;
    }
    button:hover {
      background: rgb(27, 117, 33);
    }
  }
`;
