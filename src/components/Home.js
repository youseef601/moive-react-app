import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";

function Home() {
  const [movi, setMovi] = useState([]);
  const [lang , setLang] = useState("en-US");
  const [page , setPage] = useState(1);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c",
        {
          params: {
            page: page,
            language : lang,
          },
        }
      )
      .then((res) => setMovi(res.data.results))
      .catch((error) => console.log(error));
  }, [lang , page]);

 
  const handlePrev = () => {
    var currentPage = page;
    if(!currentPage <= 1){
      currentPage--;
      setPage(currentPage);
    }
  }
  const handleNext = () => {
    var currentPage = page;
    currentPage++;
    setPage(currentPage);
  };

 const handleLang = () => {
    setLang(lang==="en-US"?"ar-SA":"en-US");
 };

  return (
    <>
      <Container className="mt-2">
      <div className="float-end">
            <button className="btn btn-primary" onClick={handleLang}>{lang==="en-US"?"English":"Arabic"}</button>
      </div>
        <Row>
          {movi.map((movie) => {
            return (
              <Col key={movie.id} lg={4} md={6}>
                <Movie movie={movie} />
              </Col>
            );
          })}
        </Row>
        <nav aria-label="Page navigation example ">
          <ul className="pagination justify-content-end">
            <li className="page-item">
              <button className="btn btn-primary mx-1" disabled={page===1? true : false} href="#/" onClick={handlePrev}>
                Previous
              </button>
            </li>
            
            <li className="page-item">
              <button className="btn btn-primary" disabled={page===38?true:false} href="#/" onClick={handleNext}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </Container>
    </>
  );
}

export default Home;
