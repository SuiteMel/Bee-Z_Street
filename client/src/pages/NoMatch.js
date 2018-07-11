import React from "react";
import Main from "../components/Main";
import { Row, Col, Card } from "react-materialize";

const NoMatch = () => (
  <Main>
    <div className="container">
      <Row>
        <Col s={12} className="">
          <Card className="orange-text white ">
            <h1 className="center-align">Ouch! You've been stung. This page doesn't exist.</h1>
            <img src="./images/Sting-Kill-33.png" />
          </Card>
        </Col>
      </Row>
    </div>
  </Main>
);

export default NoMatch;