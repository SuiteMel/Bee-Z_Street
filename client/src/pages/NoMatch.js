import React, { Component } from "react";
import Main from "../components/Main";
import { Row, Col, Card } from "react-materialize";

class NoMatch extends Component {

  render() {
    return (
      <Main className="noMatch">
          <Row>
            <Col s={12} className="">
              <Card className="orange-text white ">
                <h1 className="center-align">Ouch! You've been stung. This page doesn't exist.</h1>
                <img src="./images/Sting-Kill-33.png" />
              </Card>
            </Col>
          </Row>
      </Main>
    );
  }
};

export default NoMatch;