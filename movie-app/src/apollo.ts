import {ApolloClient, InMemoryCache} from '@apollo/client';
//새로운 아폴로 클라이언트 만들기
//uri로 불러옴
//nodeJS로 만든 Apollo-yoga를 이용한 Apollo Server
//주소가 http://localhost:4000
//나중에 리액트 최상단에 리덕스처럼 Provider로 감싸줘야함
const client = new ApolloClient({
  uri : 'http://localhost:4000/',
  cache : new InMemoryCache()
})

export default client;