"use strict";
/*
    * 타입 선언
        - 변수명 뒤에 타입 명시

    * 정적 타이핑
        - 변수를 선언할 때 변수에 할당할 값의 타입에 따라 사전에 타입을 명시적으로 선언하고
          선언한 타입에 맞는 값을 할당

    * 타입 추론
        - 타입스크립트는 정적 타입 언어이므로 타입을 선언하지 않더라도
          타입 추론에 의해 변수의 타입이 결정된다.
          이후 다른 타입의 값을 할당하면 에러가 발생한다.

          예를 들어, 값이 변할 수 있는 변수에 let 키워드를 사용하는데, 타입 추론으로 인해
          let 키워드를 사용하더라도 값이 할당되면 다른 타입의 값으로 재할당 불가능

        ※ 타입을 생략하면 타입스크립트를 사용하는 의미가 없음
 */
let foo = "hello";
let bar = 1;
function multiply1(x, y) {
    return x * y;
}
const multiply2 = (x, y) => x * y;
// boolean
let isDone = false;
// null
let n = null;
// undefined
let u = undefined;
// number
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
// string
let color = "blue";
color = "red";
let myName = "Lee";
let greeting = `Hello, my name is ${myName}.`;
// Object
const obj = {};
// array
let list1 = [1, "two", true];
let list2 = [1, 2, 3];
let list3 = [1, 2, 3];
let tuple;
tuple = ["hello", 10];
// tuple = [10, 'hello']; // error
// tuple = ['hello', 10, 'world', 100]; // error
// tuple.push(true); // error
// enum: 숫자값 집합에 이름을 지정한 것
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
let c1 = Color1.Green;
console.log(c1); // 1
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
let c2 = Color2.Green;
console.log(c2); // 2
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
let c3 = Color3.Blue;
console.log(c3); // 4
// any : 어떤 타입의 값이라도 할당 가능
let notSure = 4;
notSure = "maybe a string instead";
notSure = false;
// void : 함수에서 반환값이 없을 경우 사용 (undefined)
function warnUser() {
    console.log("This is my warning message");
}
// never : 결코 발생하지 않는 값
function infiniteLoop() {
    while (true) { } // 무한 루프 - 리턴 값 X
}
function error(message) {
    throw new Error(message); // 오류 발생 - 리턴 값 X
}
// 대소문자 주의
// 원시 타입 문자열
let primitiveStr;
primitiveStr = "hello";
// primitiveStr = new String('hello'); // 에러
// String 객체
let objectStr;
objectStr = "hello"; // String 객체에 원시타입 문자열은 가능
objectStr = new String("hello");
// Date
const today = new Date();
// HTMLElement
// const elem: HTMLElement = document.getElementById("myId");
// Person
class Person {
}
const person = new Person();
//# sourceMappingURL=exTypeDeclaration.js.map