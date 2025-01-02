"use strict";
/*
    * 제네릭 (Generic)
        - 함수 또는 클래스를 정의하는 시점에 매개변수나 반환 값의 타입을 선언하기 어려운 경우 사용
        - 한 번의 선언으로 다양한 타입에 재사용 가능
        - <T> 에서 T는 Type Parameter 라 한다. 꼭 T 안써도 됨
*/
var _a, _b, _c, _d, _e, _f;
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
// number 전용 Queue
const numberQueue = new Queue();
numberQueue.push(0);
numberQueue.push(+"1"); // + 연산자: 문자열 -> 숫자 변환
console.log((_a = numberQueue.pop()) === null || _a === void 0 ? void 0 : _a.toFixed());
console.log((_b = numberQueue.pop()) === null || _b === void 0 ? void 0 : _b.toFixed());
console.log((_c = numberQueue.pop()) === null || _c === void 0 ? void 0 : _c.toFixed());
/*
    옵셔널 체이닝 (Optional Chaining)
        - ?. 연산자

        - 객체나 배열의 프로퍼티에 접근할 때,
          해당 프로퍼티가 null 또는 undefined 인 경우 예외를 발생시키지 않고 undefined를 반환

        - null 이나 undefined 인 경우 toFixed() 나 toUpperCase() 를 사용하면 에러 발생
*/
// string 전용 Queue
const stringQuere = new Queue();
stringQuere.push("Hello");
stringQuere.push("world");
console.log((_d = stringQuere.pop()) === null || _d === void 0 ? void 0 : _d.toUpperCase());
console.log((_e = stringQuere.pop()) === null || _e === void 0 ? void 0 : _e.toUpperCase());
console.log((_f = stringQuere.pop()) === null || _f === void 0 ? void 0 : _f.toUpperCase());
// 커스텀 객체 전용 Queue
const myQueue = new Queue();
myQueue.push({ name: "Lee", age: 30 });
myQueue.push({ name: "Kim", age: 20 });
console.log(myQueue.pop());
console.log(myQueue.pop());
console.log(myQueue.pop());
//# sourceMappingURL=exQueue.js.map