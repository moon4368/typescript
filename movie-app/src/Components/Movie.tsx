import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'

interface MovieProps {
  id : number;
  bg : string;
  // isLiked : boolean;
}

function Movie ({id, bg} : MovieProps) {

  return(
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
    </Container>
  );
    
}

export default Movie;

const Container = styled.div`
  height: 400px;
  border-radius: 7px;
  width: 100%;
  border : 1px solid #F5D042;
  background-color: transparent;
`;

const Poster = styled.div<{bg : string}>`
  height: 100%;
  width: 100%;
  background-image : url(${props => props.bg});
  background-size: cover;
  background-position: center center;
  border-radius: 5px;
  
`;