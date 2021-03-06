import React from 'react';
import {gql, useQuery} from '@apollo/client';
import styled from 'styled-components';
import {useParams, Link} from 'react-router-dom';
import Loading from '../Components/Loading';

interface DetailProps {
  id:number;
  title : string;
  language : string;
  rating : number;
  description_full : string;
  medium_cover_image : string;
}

interface MovieDetail {
  movie : DetailProps;
  suggestions : DetailProps[];
}

interface ParamTypes {
  id : string;
}

const GET_MOVIE = gql`
  query getMovie($id: Int!){
    movie(id : $id){
      title
      language
      rating
      description_full
      medium_cover_image
    }
    suggestions(id : $id){
      id
      title
      language
      rating
      description_full
      medium_cover_image
    }
  }
`;


function Detail () {
  const {id} = useParams<ParamTypes>();
  const {loading, data} = useQuery<MovieDetail>(GET_MOVIE,{
    variables : {id : parseInt(id)}
  })

  return(
    <>
    <Layout>
    {loading && <Loading />}
      {!loading && data?.movie &&
      <>
      <Movie>
        <Title>
          {data.movie.title}
        </Title>
        <SubTitle>
          Language : {data.movie.language.toUpperCase()} · Rating : {data.movie.rating}
        </SubTitle>
        <Description>
          {data.movie.description_full}
        </Description>
        <Explaination><i className="fas fa-angle-down"></i> 4 Recommend Movies</Explaination>
      </Movie>
      <Poster bg={data.movie.medium_cover_image}></Poster>
      </>
      }
    </Layout>
    <PosterLayout>
      {!loading && data?.suggestions.map(suggestion => {
        return (
        <Link style={{"width": "13%", "height" : "90%","margin" : "0 1rem"}} to={`/${suggestion.id}`}>
        <SuggestionPoster key={suggestion.id} bg={suggestion.medium_cover_image}/>
        </Link>
        )
      })}
    </PosterLayout>
    {/* <SuggestionLayout>
      {!loading && data?.suggestions.map((suggestion,index) => {
        return (
          <SContainer id="suggestions">
            <Movie>
              <Recommend> - Recommend movie {index + 1} -</Recommend>
            <Title>
          {suggestion.title}
        </Title>
        <SubTitle>
          Language : {suggestion.language.toUpperCase()} · Rating : {suggestion.rating}
        </SubTitle>
        <Description>
          {suggestion.description_full}
        </Description>
      </Movie>
          <SuggestionPoster 
          key={suggestion.id} 
          bg={suggestion.medium_cover_image}/>
          </SContainer>
          )
      })}
    </SuggestionLayout> */}
    </>
  );
}
export default Detail;

const SuggestionPoster =styled.div<{bg : string}>`
  width : 100%;
  height : 100%;
  border : 0.1rem solid #F5D042;
  background-image : url(${props => props.bg});
  background-size: 100% 100%;
  background-position: center center;
  border-radius: 7px;
`;

const PosterLayout = styled.div`
  height : 30vh;
  background-color : #0A174E;
  display : flex;
  justify-content : center;
  align-items : center;
`;

const Explaination = styled.span`
  font-size : 1.5rem;
  font-weight : 600;
`;

// const Recommend = styled.p`
//   font-size : 2rem;
//   font-weight : 550;
// `;

// const SContainer = styled.div`
//   width : 100%;
//   height : 100%;
//   display : flex;
//   justify-content : space-around;
//   align-items : center;
// `;

// const SuggestionPoster = styled.div<{bg:string}>`
//   width : 25%;
//   height : 60%;
//   border : 0.1rem solid #F5D042;
//   background-image : url(${props => props.bg});
//   background-size: 100% 100%;
//   background-position: center center;
//   border-radius: 7px;
// `;

// const SuggestionLayout = styled.div`
// width : 100%;
//   height : 100vh;

//   #suggestions:nth-child(odd){
//     background-color : #0A174E;
//     color : #F5D042;
//   }
//   #suggestions:nth-child(2n){
//     background-color : #F5D042;
//     color : #0A174E;
//   }  
// `;

const Layout = styled.div`
  width : 100%;
  /* height : 100vh; */
  height : 70vh;
  background-color : #F5D042;
  display : flex;
  justify-content : space-around;
  align-items : center;
  color : #0A174E;
`;

const Movie = styled.div`
  width : 40%;
`;

const Title = styled.h1`
  width : 80%;
  margin : 1rem 0;
  font-size : 4rem;
  font-weight : 800;
`;

const SubTitle = styled.h4`
  width : 80%;
  margin : 1rem 0;
  font-size : 2rem;
  font-weight : 600;
`;

const Description = styled.p`
  word-break : break-all;
  width : 100%;
  margin : 2rem 0;
  font-size : 1.5rem;
  font-weight: 500;
`;

const Poster = styled.div<{bg : string}>`
  /* width : 25%; */
  width : 20%;
  height : 60%;
  border : 0.5rem solid #0A174E;
  background-image : url(${props => props.bg});
  background-size: 100% 100%;
  background-position: center center;
  border-radius: 7px;
`;
