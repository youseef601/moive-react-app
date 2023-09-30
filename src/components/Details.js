import {useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Header.css";


function Details() {
 const {id} = useParams();
const [det, setDet] = useState([]);

useEffect(() => {
  axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c`)
  .then((res) => setDet(res.data))
  .catch((error) => console.log(error))
}, [])
  return (
    <>
       <Container>
        <Row >
          <Col className="mt-4 mx-auto" style={{paddingLeft:"22%",paddingRight:"25%",margin:"0px"}}>
          <Card style={{width:"100%",margin:"0px"}}>
          <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${det.poster_path}`}style={{height: "400px",width:"100%"}} />
          <Card.Body>
            <Card.Title>{det.original_title}</Card.Title>
            <Card.Text>
            {det.overview}
            </Card.Text>
            <h5>Rate: {Math.round(det.vote_average)} / 10</h5>
          </Card.Body>
        </Card>
          </Col>
        </Row>
       </Container>
    </>
  )
}

export default Details;