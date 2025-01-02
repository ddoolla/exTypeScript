"use strict";
/*
    * static 키워드
        - 정적 프로퍼티, 메서드 정의
        - 클래스 이름으로 호출
        - 인스턴스로 호출 불가
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Foo = void 0;
class Foo {
    constructor(prop) {
        this.prop = prop;
    }
    static staticMethod() {
        return "staticMethod";
    }
    prototypeMethod() {
        return this.prop;
    }
}
exports.Foo = Foo;
Foo.staticProperty = 10;
console.log(Foo.staticMethod());
console.log(Foo.staticProperty);
const foo = new Foo(123);
// console.log(foo.staticMethod()); // 인스턴스로 호출 불가
// console.log(foo.staticProperty); // 인스턴스로 호출 불가
//# sourceMappingURL=exStatic.js.map