/*
    * static 키워드
        - 정적 프로퍼티, 메서드 정의
        - 클래스 이름으로 호출 
        - 인스턴스로 호출 불가
 */

class Foo {
  private prop: any;
  static staticProperty = 10;

  constructor(prop: any) {
    this.prop = prop;
  }

  static staticMethod() {
    return "staticMethod";
  }

  prototypeMethod() {
    return this.prop;
  }
}

console.log(Foo.staticMethod());
console.log(Foo.staticProperty);

const foo = new Foo(123);
// console.log(foo.staticMethod()); // 인스턴스로 호출 불가
// console.log(foo.staticProperty); // 인스턴스로 호출 불가
