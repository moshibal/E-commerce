import React from "react";
import CardItem from "./CardItem";
import products from "../../assets/products.js";
import { Row, Col } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <div>
      <h1>Latest products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.name} sm={12} md={6} lg={4} xl={3}>
            <CardItem
              name={product.name}
              image={product.image}
              description={product.description}
              _id={product._id}
              numReviews={product.numReviews}
              rating={product.rating}
              price={product.price}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
