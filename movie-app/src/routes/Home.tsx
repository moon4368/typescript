import React from 'react';
import {gql, useQuery} from '@apollo/client';
import styled from 'styled-components';
import Movie from '../Components/Movie';
import Loading from '../Components/Loading';

interface MoviePoster {
  id: number;
  title : string;
  medium_cover_image: string;
}

interface Movies {
  movies : MoviePoster[];
}

const GET_MOVIES = gql`
  {
    movies{
      id
      medium_cover_image
    }
  }
`;

function Home () {
  const {loading, data} = useQuery<Movies>(GET_MOVIES);
  return(
    <>
      <Header>
        <Title>Movie App</Title>
        <SubTitle>Apollo & Graphql API</SubTitle>
      </Header>
      <Section>
      {loading && <Loading />}
        <MovieList>
          {!loading && data?.movies &&
            data.movies.map(movie => <Movie 
            key={movie.id} 
            id={movie.id} 
            bg={movie.medium_cover_image}/>)}
        </MovieList>
      </Section>
    </>    
  );

}

export default Home;

const Header = styled.header`
  width : 100%;
  height : 35vh;
  background-color : #0A174E;
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
`;

const Section = styled.section`
  width : 100%;
  background-color : #F5D042;
`;

const Title = styled.h1`
  color : #F5D042;
  font-size : 3rem;
  font-weight : 800;
  margin-bottom : 1rem;
`;

const SubTitle = styled.h1`
  color : #F5D042;
`;

const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -5rem;
  margin : 0 auto;
  @media screen and (max-width : 1400px){
    width : 80%;
  }
  @media screen and (max-width : 1200px){
    grid-template-columns : repeat(3, 1fr);
  }
  @media screen and (max-width : 769px){
    grid-template-columns : repeat(2, 1fr);
  }
  @media screen and (max-width : 500px){
    grid-template-columns : repeat(1, 1fr);
  }
`;

