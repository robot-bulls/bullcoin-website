import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/bullCoinWhite.png"
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container >
        <Row>
          <Col md="3">
            <img src={logo} alt="" />
          </Col>

          <Col md="3">
            <h3 className="title">Follow us:</h3>
            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href=""
                id="tooltip622135962"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href=""
                id="tooltip230450801"
                target="_blank"
              >
                <i className="fab fa-telegram" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip230450801">
                Follow us
              </UncontrolledTooltip>

            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
