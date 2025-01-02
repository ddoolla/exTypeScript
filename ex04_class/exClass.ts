/* 클래스 선언 예제 */
export class Person {
  name: string; // 클래스 프로퍼티를 사전 선언

  constructor(name: string) {
    this.name = name;
  }

  walk() {
    console.log(`${this.name} is walking`);
  }
}

const person = new Person("Lee");
person.walk();

/* 접근 제한자 예제 */
class Foo {
  public x: string;
  protected y: string;
  private z: string;

  constructor(x: string, y: string, z: string) {
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
  constructor(x: string, y: string, z: string) {
    super(x, y, z);

    console.log(this.x);
    console.log(this.y); // 자식 클래스 내부 참조 가능
    // console.log(this.z); // 자식 클래스 내부 참조 불가 (private)
  }
}

/* 생성자 파라미터에 접근 제한자 선언 예제 */
class Foo2 {
  // 프로퍼티 자동 선언

  constructor(public x: string, private y: string) {
    // 생성자 자동 초기화
  }
}

const foo2 = new Foo2("Hello", "world");
console.log(foo2);
console.log(foo2.x);
// console.log(foo2.y); // 인스턴스 참조 불가 (private)

class Bar2 {
  constructor(x: string) {
    console.log(x);
  }
}

const bar2 = new Bar2("hello");
console.log(bar2);
