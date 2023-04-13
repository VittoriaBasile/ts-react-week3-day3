import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface NewsProps {
  imageUrl: string;
  title: string;
  newsSite: string;
  id: number;
}

const Notizia = ({ imageUrl, title, newsSite, id }: NewsProps) => {
  const navigate = useNavigate();

  return (
    <Card className="card">
      <Card.Img className="cardImg" variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title className="cardTitle">{title}</Card.Title>
        <Card.Text>{newsSite}</Card.Text>
        <Button onClick={() => navigate(`/details/${id}`)} variant="primary">
          Scopri di più
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Notizia;
