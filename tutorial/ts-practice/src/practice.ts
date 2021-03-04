//### variable typescript
let count = 0;//number
count += 1;
// count ="문자열" //Type 'string' is not assingnable to type 'number'

const message : string = 'hello world';//string

const done : boolean = true; //boolean

const numbers: number[] = [1,2,3]// number array
const messages: string[] = ['1','2','3']//string array

// message.push(4); //Property 'push' doesn't exist on type 'string'

let mightBeUndefined : string | undefined = undefined; //string or undefined
let nullableNumber : number | null = null; //number or null

let color : 'red' | 'orange' | 'yellow' = 'red'; // one of three
color = 'yellow';
// color = 'green'; //Type 'green' is not assignable to type "red" | "orange" | "yellow"

//----------------------------------------------------------
//### function typescript
function sum (x:number , y:number) : number {
  return x+y;
  // return null //Type 'null' is not assginable to type 'number'
}
sum(1,2);

function sumArray(numbers : number[]) : number{
  return numbers.reduce((acc,current) => acc+current,0);
}
const total = sumArray([1,2,3,4,5]);

function returnNothing() : void {
  console.log('I am just saying hello world');
}

//----------------------------------------------------------
//### interface typescript
interface Shape{
  getArea() : number;
}

class Circle implements Shape{
  // 1번 방식
  // radius : number;

  // constructor(radius : number){
  //   this.radius = radius;
  // }

  // 2번 방식
  constructor(public radius : number){
    this.radius = radius;
  }

  getArea(){
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape{
  // width : number;
  // height : number;

  // constructor(width : number, height : number){
  //   this.width = width;
  //   this.height = height;
  // }

  constructor(private width : number, private height : number){
    this.width=width;
    this.height=height;
  }

  getArea(){
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10,5);

console.log(circle.radius);
// console.log(rectangle.width);//Property 'width' is private and only accessible within class 'Rectangle'

const shapes : Shape[] = [new Circle(5), new Rectangle(10,5)];
shapes.forEach(shape => {
  console.log(shape.getArea());
});

//-----------------------------------------------------------
// ### object interface typescript
interface Person {
  name : string;
  age? : number;
}

interface Developer extends Person{
  skills : string[];
}

const person : Person = {
  name: '김사람',
  age : 20
};

const expert : Developer = {
  name : '김사람',
  skills : ['javascipt', 'react']
};

const people : Person[] = [person, expert];
console.log(people)

type People = Person[];
const people2 : People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color2 :Color = 'red';
const colors : Color[] = ['red', 'orange'];

// 일관성 있게만 쓰면 type이던 interface건 상관없음.
// 라이브러리를 작성하거나 다른 라이브러리를 위한 타입 지원 파일을 
// 작성하게 될 떄는 interface를 사용 하는 것을 권장.

//-----------------------------------------------------------
//### generics
function wrongGeneric(a: any, b:any) : any {
  return {
    ...a,
    ...b
  };
}
const wrong = wrongGeneric({foo : 1}, {bar : 1});
//타입 추론이꺠짐 이럴 떄 제네릭을 사용

function merge<A,B>(a:A, b:B) :A & B {
  return {
    ...a,
    ...b
  };
}
const merged = merge({foo : 1}, {bar : 1});

function wrap<T>(param : T){
  return {
    param
  }
}
const wrapped = wrap(10);

//interface도 가능
type Items<T> = {
  list : T[];
}

const stringItems : Items<string> = {
  list : ['a','b','c']
};
const numberItems : Items<number> = {
  list : [1,2,3]
};

class Queue<T>{
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item : T) {
    this.list.push(item);
  }
  dequeue(){
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());