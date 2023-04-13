import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Notizia = () => {
  const navigate = useNavigate();

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="notizia.imageUrl" />
      <Card.Body>
        <Card.Title>notizia.title</Card.Title>
        <Card.Text>notizia.newsSite</Card.Text>
        <Button onClick={() => navigate("/details/notizia.id")} variant="primary">
          Scopri di più
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Notizia;
