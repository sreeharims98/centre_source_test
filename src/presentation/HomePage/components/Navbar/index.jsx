import { Col, Row } from "antd";
import React from "react";
import { reactLogo } from "../../../common/assets/images";
import { NavbarWrapper } from "./style";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Row>
        <Col span={8}>
          <ul className="left-sec">
            <li className="inactive">HOME</li>
            <li className="inactive">ABOUT US</li>
            <li className="inactive">DIET PLANS</li>
            <li className="active">SELECT YOUR PLANS</li>
          </ul>
        </Col>
        <Col span={8}>
          <div className="center-sec">
            <img src={reactLogo} alt="logo" />
          </div>
        </Col>
        <Col span={8}>
          <ul className="right-sec">
            <li className="inactive">Sign In</li>
            <li className="active">Register</li>
          </ul>
        </Col>
      </Row>
    </NavbarWrapper>
  );
};

export default Navbar;
