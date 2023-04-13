import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { News } from "../Intefaces/INotizia";
const Detail = () => {
  const params = useParams();
  const [notizia, setNotizia] = useState<News | null>(null);

  const endpoint = `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`;
  const fetchNews = async () => {
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const res = await response.json();
        setNotizia(res);
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
      {notizia && (
        <>
          <Row className="justify-content-center align-items-center mt-5">
            <Col>
              <img className="imgDetails" src={notizia.imageUrl} alt="img" />
            </Col>
            <Col>
              <h1>{notizia.title}</h1>
              <p>{notizia.newsSite}</p>
              <p>{notizia.summary}</p>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Detail;
