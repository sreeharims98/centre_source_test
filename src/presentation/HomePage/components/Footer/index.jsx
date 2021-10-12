import React from "react";
import {
  facebookIco,
  instagramIco,
  twitterIco,
  whatsappIco,
  youtubeIco,
} from "../../../common/assets/icons";
import { reactLogo } from "../../../common/assets/images";
import { FooterWrapper } from "./style";

const MyFooter = () => {
  return (
    <FooterWrapper>
      <div className="footer">
        <div className="top-sec">
          <div className="logo">
            <img src={reactLogo} alt="logo" />
          </div>
          <div className="address">
            <ul>
              <li className="title">ADDRESS</li>
              <li>Edible Kitchen Services</li>
              <li>JN Stadium, Kaloor</li>
              <li>Kochi - 6806644</li>
            </ul>
          </div>
          <div className="phone">
            <ul>
              <li className="title">PHONE</li>
              <li>0123456789</li>
            </ul>
          </div>
          <div className="quick-links">
            <ul>
              <li className="title">QUICK LINKS</li>
              <li>My Account</li>
              <li>About Us</li>
              <li>Keto Plans</li>
              <li>Our Dishes</li>
            </ul>
          </div>
          <div className="follow-us">
            <ul>
              <li className="title">FOLLOW US</li>
            </ul>
            <img src={facebookIco} alt="facebookIco" />
            <img src={whatsappIco} alt="whatsappIco" />
            <img src={twitterIco} alt="twitterIco" />
            <img src={instagramIco} alt="instagramIco" />
            <img src={youtubeIco} alt="youtubeIco" />
          </div>
        </div>
        <div className="bot-sec">
          Copyright 2020-2021 Edibles - All Rights Reserved
        </div>
      </div>
    </FooterWrapper>
  );
};

export default MyFooter;
