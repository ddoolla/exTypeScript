"use strict";
/*
    * readonly 키워드
        - readonly 클래스 프로퍼티는 선언 시 또는 생성자 내부에서만 값을 할당 가능
        - 상수 선언에 사용
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Foo = void 0;
class Foo {
    constructor() {
        this.MAX_LEN = 5;
        this.MSG = "hello";
    }
    log() {
        // this.MAX_LEN = 10; // 재할당 금지
        // this.MSG = "Hi"; // 재할당 금지
        console.log(`MAX_LEN: ${this.MAX_LEN}`);
        console.log(`MSG: ${this.MSG}`);
    }
}
exports.Foo = Foo;
//# sourceMappingURL=exReadonly.js.map