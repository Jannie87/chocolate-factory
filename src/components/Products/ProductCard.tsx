import { CSSProperties, useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Product } from "../../products";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export interface Props {
  product: Product;
}

// Displays each product in its own card
function ChocoCard({ product }: Props) {
  let context = useContext(CartContext);

  return (
    <Card border="dark" style={{ width: "20rem" }}>
      <Card.Img
        variant="top"
        src={product.image}
        style={{ width: "19.9rem" }}
      />
      <Card.Body style={cardBody}>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>{product.text}</Card.Text>
        <Link to={`/DetailsChocolate/${product.id}`}>
          <Button style={infoBtn} variant="dark">
            More info
          </Button>
        </Link>

        <Card.Subtitle style={{ paddingBottom: "1rem" }}>
          {product.price} {product.valuta}
        </Card.Subtitle>

        <Button
          onClick={() => context.addToCart(product)}
          type="submit"
          variant="dark"
          key={1}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

const cardBody: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const infoBtn: CSSProperties = {
  marginBottom: "1rem",
};

export default ChocoCard;
