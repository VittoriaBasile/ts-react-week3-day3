import { Container, Row, Col } from "react-bootstrap";
import Notizia from "./Notizia";

const Home = () => {
  return (
    <Container>
      <Row xs={2} md={4} lg={5}>
        <Col>
          <Notizia />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
