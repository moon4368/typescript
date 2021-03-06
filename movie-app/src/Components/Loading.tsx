import React from 'react'
import styled from 'styled-components';


function Loading () {

  return(
    <Container>
      Loading...
    </Container>
  );

}
export default Loading;

const Container = styled.div`
  width : 100%;
  height : 65vh;
  display : flex;
  justify-content : center;
  align-items : center;
  font-size : 4rem;
  color : #0A174E;
  animation : fadeOut 3s 2s infinite;
  -webkit-animation : fadeOut 3s 2s infinite;
  -moz-animation : fadeOut 3s 2s infinite;
  -ms-animation : fadeOut 3s 2s infinite;
  -o-animation : fadeOut 3s 2s infinite;

  @keyframes fadeOut{
    from{opacity : 0;}
    to{opacity : 1;}
  }
  @-webkit-keyframes fadeOut{
    from{opacity : 0;}
    to{opacity : 1;}
  }
  @-moz-keyframes fadeOut{
    from{opacity : 0;}
    to{opacity : 1;}
  }
  @-ms-keyframes fadeOut{
    from{opacity : 0;}
    to{opacity : 1;}
  }
  @-o-keyframes fadeOut{
    from{opacity : 0;}
    to{opacity : 1;}
  }
`;