import { Col, Row } from "antd";
import React from "react";
import { ContactUsWrapper } from "./style";

const ContactUs = () => {
  return (
    <ContactUsWrapper>
      <div className="title">
        Feel Free to Contact us for your customized meal plan
      </div>
      <div className="contactus-form">
        <div className="left-sec">
          <div style={{ width: "100%", boxSizing: "border-box" }}>
            <Row gutter={25}>
              <Col span={12}>
                <div className="label">Your Name *</div>
                <input type="text" />
              </Col>
              <Col span={12}>
                <div className="label">Your Email</div>
                <input type="email" />
              </Col>
            </Row>
            <Row gutter={25}>
              <Col span={12}>
                <div className="label">Your Mobile No *</div>
                <input type="number" />
              </Col>
              <Col span={12}>
                <div className="label">Message</div>
                <input type="text" />
              </Col>
            </Row>
          </div>
        </div>
        <div className="right-sec">
          Send
          <br />
          Now
        </div>
      </div>
    </ContactUsWrapper>
  );
};

export default ContactUs;
