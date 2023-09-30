import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToFavourite } from '../rtk/slices/favouriteSlice';
import { useState } from 'react';
import { remove } from '../rtk/slices/favouriteSlice';
import axios from "axios";


function Movie(props) {
  const {movie} = props;
  const selec = useSelector((state) => state.fav.cart)
  const dispatch = useDispatch();

  console.log(selec);
 
const [disable , setDisable] = useState(false);

  const handlestar = () => {
    dispatch(addToFavourite(movie));
    setDisable(true);
  }

  const handledeletestar = () => {
    dispatch(remove(movie.id));
    setDisable(false);
  }


  return (
    <>
     <Card className='mx-auto my-2' style={{ width: '22rem' }}>
      <Card.Img className='text-decoration-none' variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} style={{ height: '22rem' }}/>
      <Card.Body>
        <Card.Title>{movie.original_title}</Card.Title>
        <Link className='btn btn-primary' to={`/movie/${movie.id}`} variant="primary">Watch Now</Link>
        {
          disable?<i onClick={handledeletestar} className="fa-solid fa-star text-warning ms-2"></i>:<i onClick={handlestar} className="ms-2 fa-regular fa-star "></i>
        }
        
      </Card.Body>
    </Card>
    </>
  )
}

export default Movie;