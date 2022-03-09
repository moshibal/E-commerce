import { useState, useEffect } from "react";
import axios from "axios";
import CardItem from "./CardItem";

import { Row, Col } from "react-bootstrap";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:4000/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
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
