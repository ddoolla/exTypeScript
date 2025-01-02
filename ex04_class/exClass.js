"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    * 타입스크립트 클래스
        - 클래스 몸체에 클래스 프로퍼티를 사전 선언하여야 한다.
 */
class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log(`${this.name} is walking`);
    }
}
const person = new Person("Lee");
person.walk();
/*
    * 접근 제한자
       - public / protected / private
       - 선언하지 않을 경우 public (default)
*/
class Foo {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
const foo = new Foo("x", "y", "z");
console.log(foo.x);
// console.log(foo.y); // 인스턴스 참조 불가 (protected)
// console.log(foo.z); // 인스턴스 참조 불가 (private)
class Bar extends Foo {
    constructor(x, y, z) {
        super(x, y, z);
        console.log(this.x);
        console.log(this.y); // 자식 클래스 내부 참조 가능
        // console.log(this.z); // 자식 클래스 내부 참조 불가 (private)
    }
}
/*
    * 생성자 파라미터에 접근 제한자 선언
      - 생성자 파라미터에 접근 제한자를 사용하면
        1. 암묵적으로 클래스 프로퍼티로 선언
        2. 암묵적으로 생성자 초기화

      - 생성자 파라미터에 접근 제한자를 선언하지 않으면
        생성자 내부에서만 유효한 지역 변수
*/
class Foo2 {
    // 프로퍼티 자동 선언 x
    constructor(x, y) {
        this.x = x;
        this.y = y;
        // 생성자 자동 초기화
    }
}
const foo2 = new Foo2("Hello", "world");
console.log(foo2);
console.log(foo2.x);
// console.log(foo2.y); // 인스턴스 참조 불가 (private)
class Bar2 {
    constructor(x) {
        console.log(x);
    }
}
const bar2 = new Bar2("hello");
console.log(bar2);
//# sourceMappingURL=exClass.js.map