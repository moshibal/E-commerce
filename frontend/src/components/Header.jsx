import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.heading}>
      <Container>
        <Row>
          <Col md={6} sl>
            <h2 className={styles.headingNav}>ProShop</h2>
          </Col>
          <Col md={6}>
            <div>
              <ul className={styles["nav-flex"]}>
                <li>
                  <i className="fa-solid fa-cart-circle-plus"></i>
                  <Link to="/cart">Cart</Link>
                </li>
                <li>
                  <i className="fs fs-login"></i>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
