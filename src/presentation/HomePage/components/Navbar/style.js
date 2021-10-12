import styled from "styled-components";

export const NavbarWrapper = styled.div`
  padding: 1rem 0;
  height: 89px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0000000d;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
      padding: 0.5rem;
      margin: 0.5rem;
      border-radius: 5px;
      cursor: pointer;
      font-weight: 500;
    }
    .inactive {
      background-color: #ffffff;
      color: #000000;
    }
    .active {
      background-color: #000000;
      color: #ffffff;
    }
  }
  .left-sec {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .right-sec {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .center-sec {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 60px;
    }
  }
`;
