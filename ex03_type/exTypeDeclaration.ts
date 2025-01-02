/* 타입 선언 예제 */

/* 변수 선언 */
let foo: string = "hello";

let bar: number = 1;

/* 함수 선언 */
function multiply1(x: number, y: number): number {
  return x * y;
}

const multiply2 = (x: number, y: number): number => x * y;

// boolean 타입
let isDone: boolean = false;

// null 타입
let n: null = null;

// undefined 타입
let u: undefined = undefined;

// number 타입
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// string 타입
let color: string = "blue";
color = "red";
let myName: string = "Lee";
let greeting: string = `Hello, my name is ${myName}.`;

// Object 타입
const obj: object = {};

// array 타입
let list1: any[] = [1, "two", true];
let list2: number[] = [1, 2, 3];
let list3: Array<number> = [1, 2, 3];

let tuple: [string, number];
tuple = ["hello", 10];
// tuple = [10, 'hello']; // Error
// tuple = ['hello', 10, 'world', 100]; // Error
// tuple.push(true); // Error

// enum 타입 - 숫자값 집합에 이름을 지정한 것
enum Color1 {
  Red, // 0
  Green, // 1
  Blue, // 2
}

let c1: Color1 = Color1.Green;
console.log(c1); // 1

enum Color2 {
  Red = 1,
  Green, // 2
  Blue, // 3
}

let c2: Color2 = Color2.Green;
console.log(c2); // 2

enum Color3 {
  Red = 1,
  Green = 2,
  Blue = 4,
}

let c3: Color3 = Color3.Blue;
console.log(c3); // 4

// any 타입 - 어떤 타입의 값이라도 할당 가능
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

// void 타입 - 함수에서 반환값이 없을 경우 사용 (undefined)
function warnUser(): void {
  console.log("This is my warning message");
}

// never 타입 - 결코 발생하지 않는 값
function infiniteLoop(): never {
  while (true) {} // 무한 루프 - 리턴 값 X
}

function error(message: string): never {
  throw new Error(message); // 오류 발생 - 리턴 값 X
}

// 대소문자 주의
// 원시 타입 문자열
let primitiveStr: string;
primitiveStr = "hello";
// primitiveStr = new String('hello'); // Error

// String 객체 타입
let objectStr: String;
objectStr = "hello"; // String 객체에 원시타입 문자열은 가능
objectStr = new String("hello");

// Date 타입
const today: Date = new Date();

// HTMLElement 타입
// const elem: HTMLElement = document.getElementById("myId");

// Person 타입
class Person {}
const person: Person = new Person();
