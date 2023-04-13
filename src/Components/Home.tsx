import { Container, Row, Col } from "react-bootstrap";
import Notizia from "./Notizia";
import { useEffect, useState } from "react";
import { News } from "../Intefaces/INotizia";

const Home = () => {
  const [news, setNews] = useState<News[]>([]);

  const endpoint = "https://api.spaceflightnewsapi.net/v3/articles";

  const fetchNews = async () => {
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const res = await response.json();
        setNews(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Container>
      <Row xs={2} md={4} lg={5} className="mt-5">
        {news.map((n) => (
          <Col key={n.id} className="my-3">
            <Notizia imageUrl={n.imageUrl} title={n.title} newsSite={n.newsSite} id={n.id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
