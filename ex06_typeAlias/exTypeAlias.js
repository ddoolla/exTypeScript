"use strict";
/*
    * 타입 앨리어스 (Type Alias)
        - 새로운 타입을 정의 (인터페이스와 유사)
        - 원시 값, 유니온, 튜플 등도 타입 지정 사능
        - 상속 및 구현 불가
    
    ※ 인터페이스로 표현할 수 없거나, 유니온 또는 튜플을 사용해야할 때 사용
*/
Object.defineProperty(exports, "__esModule", { value: true });
const person = {}; // 타입 캐스팅
person.name = "Lee";
person.age = 20;
const person2 = {};
person2.name = "Lee";
person2.age = 20;
const strVar1 = "Lee";
const unionVar1 = "Hello";
const unionVar2 = null;
const nameVar1 = "Lee";
const nameVar2 = "Kim";
const numVar1 = 1;
const objVar1 = { a: 1 };
const func1 = function () {
    return "Hello";
};
const func2 = function () {
    console.log("Hello");
};
const shape1 = { x: 10, y: 20 };
const shape2 = { r: 5 };
const t1 = ["Hello", true];
// const t2: Tuple = ["Hello", "world"]; // Error
//# sourceMappingURL=exTypeAlias.js.map