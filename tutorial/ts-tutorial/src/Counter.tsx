import React,{useState} from 'react'

function Counter() {
//generics를 명시 안해도 됨
const [count, setCount] = useState<number>(0)
//generics를 명시하면 좋을 때
//1. 상태가 null일 수도 있고 아닐수도 있을 떄
type Information = {name : string; description : string;};
const [info, setInfo] = useState<Information | null>(null);
//2. 상태의 타입이 까다로운 구조를 가진 객체이거나 배열 일 때
//배열의 경우 빈 배열만 넣었을 때 해당 배열이 어떤 타입으로 이루어진 배열인지
//추론할 수 없기 떄문에 generics를 명시
type Todo = {id:number; text: string; done:boolean};
const [todos, setTodos] = useState<Todo[]>([]);

const onIncrease = () => setCount(count + 1);
const onDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  )
}

export default Counter;
