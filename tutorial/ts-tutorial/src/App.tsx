import React from 'react';
// import Counter from './Counter'//state
// import ReducerCounter from './ReducerCounter'//useReducer
// import ReducerSample from './ReducerSample';//useReducer
// import Greetings from './Greetings';//props
import MyForm from './MyForm';//useRef, useState

const App: React.FC = () => {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return <MyForm onSubmit={onSubmit} />;
};

export default App;

