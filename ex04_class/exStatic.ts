/* 정적 키워드 예제 */
export class Foo {
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
