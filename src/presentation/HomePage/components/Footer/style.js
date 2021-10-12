import styled from "styled-components";

export const FooterWrapper = styled.div`
  height: 317px;
  background: transparent linear-gradient(180deg, #fbfbfb 0%, #ffffff 100%) 0%
    0% no-repeat padding-box;
  .footer {
    padding: 2rem 4rem;
    .top-sec {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding: 2rem;
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        font-weight: 500;
        .title {
          color: #27a12f;
          margin-bottom: 0.5rem;
        }
        li {
          color: #474747;
        }
      }
      .logo {
        margin: 3rem;
        width: 96px;
        img {
          width: 100%;
        }
      }
      .address {
        margin: 3rem;
      }
      .phone {
        margin: 3rem;
      }
      .quick-links {
        margin: 3rem;
      }
      .follow-us {
        margin: 3rem;
        img {
          margin-right: 0.5rem;
        }
      }
    }
    .bot-sec {
      border-top: 1px solid #b9b9b9;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }
  }
`;
