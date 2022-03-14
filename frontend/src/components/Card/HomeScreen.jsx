import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../store/prodouctSlice";

import CardItem from "./CardItem";

import { Row, Col } from "react-bootstrap";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product);

  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  return (
    <div>
      <h1>Latest products</h1>
      {loading ? (
        <h2>Loading..</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
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
      )}
    </div>
  );
};

export default HomeScreen;
