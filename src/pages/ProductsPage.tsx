import { CSSProperties } from "react";
import ChocoCard from "../components/Products/ProductCard";
import { mockedProducts } from "../products";
import { Container, Row, Col } from "react-bootstrap";
import { Footer } from "../components/Layout/Footer";
import background from "../assets/Background.jpg";

// Maps out all the chocolates from products.ts
export default function Chocolates() {
  return (
    <div style={productsContainer}>
      <h3 style={productPageTitle}>Products</h3>
      <Container>
        <Row>
          <Col>
            <div style={productPageCards}>
              {mockedProducts.map((product) => (
                <ChocoCard product={product} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

const productsContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  WebkitBackgroundSize: "cover",
};

const productPageTitle: CSSProperties = {
  textAlign: "center",
};

const productPageCards: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "2rem",
};
