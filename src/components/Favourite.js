import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { remove } from "../rtk/slices/favouriteSlice";

function Favourite() {
  const favitems = useSelector((state) => state.fav.cart);
  const dispatch = useDispatch();
  return (
    <>
      <h4 className="my-4">My Favourite Movies</h4>
      <Container>
        <Row>
          {favitems.map((item) => {
            return (
                <Col key={item.id} md={4}>
                  <Card  style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    />
                    <Card.Body>
                      <Card.Title>{item.original_title}</Card.Title>
                      <Card.Text>{item.overview}</Card.Text>
                      <Button onClick={() => dispatch(remove({id: item.id}))} variant="danger">Remove</Button>
                    </Card.Body>
                  </Card>
                </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Favourite;
