"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//### variable typescript
var count = 0; //number
count += 1;
// count ="문자열" //Type 'string' is not assingnable to type 'number'
var message = 'hello world'; //string
var done = true; //boolean
var numbers = [1, 2, 3]; // number array
var messages = ['1', '2', '3']; //string array
// message.push(4); //Property 'push' doesn't exist on type 'string'
var mightBeUndefined = undefined; //string or undefined
var nullableNumber = null; //number or null
var color = 'red'; // one of three
color = 'yellow';
// color = 'green'; //Type 'green' is not assignable to type "red" | "orange" | "yellow"
//----------------------------------------------------------
//### function typescript
function sum(x, y) {
    return x + y;
    // return null //Type 'null' is not assginable to type 'number'
}
sum(1, 2);
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArray([1, 2, 3, 4, 5]);
function returnNothing() {
    console.log('I am just saying hello world');
}
var Circle = /** @class */ (function () {
    // 1번 방식
    // radius : number;
    // constructor(radius : number){
    //   this.radius = radius;
    // }
    // 2번 방식
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    // width : number;
    // height : number;
    // constructor(width : number, height : number){
    //   this.width = width;
    //   this.height = height;
    // }
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var circle = new Circle(5);
var rectangle = new Rectangle(10, 5);
console.log(circle.radius);
// console.log(rectangle.width);//Property 'width' is private and only accessible within class 'Rectangle'
var shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
var person = {
    name: '김사람',
    age: 20
};
var expert = {
    name: '김사람',
    skills: ['javascipt', 'react']
};
var people = [person, expert];
console.log(people);
var people2 = [person, expert];
var color2 = 'red';
var colors = ['red', 'orange'];
// 일관성 있게만 쓰면 type이던 interface건 상관없음.
// 라이브러리를 작성하거나 다른 라이브러리를 위한 타입 지원 파일을 
// 작성하게 될 떄는 interface를 사용 하는 것을 권장.
//-----------------------------------------------------------
//### generics
function wrongGeneric(a, b) {
    return __assign(__assign({}, a), b);
}
var wrong = wrongGeneric({ foo: 1 }, { bar: 1 });
//타입 추론이꺠짐 이럴 떄 제네릭을 사용
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var merged = merge({ foo: 1 }, { bar: 1 });
function wrap(param) {
    return {
        param: param
    };
}
var wrapped = wrap(10);
var stringItems = {
    list: ['a', 'b', 'c']
};
var numberItems = {
    list: [1, 2, 3]
};
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    Object.defineProperty(Queue.prototype, "length", {
        get: function () {
            return this.list.length;
        },
        enumerable: false,
        configurable: true
    });
    Queue.prototype.enqueue = function (item) {
        this.list.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queue;
}());
var queue = new Queue();
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
