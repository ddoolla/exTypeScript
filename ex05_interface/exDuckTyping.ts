/* 덕 타이핑 예제 */
interface IDuck {
  quack(): void;
}

// IDuck 구현
class MallarDuck implements IDuck {
  quack(): void {
    console.log("Quack!");
  }
}

// IDuck 을 구현하지 않았지만, quack() 가지고 있음
class RedheadDuck {
  quack() {
    console.log("q~uack!");
  }
}

function makeNoise(duck: IDuck): void {
  duck.quack();
}

makeNoise(new MallarDuck());
makeNoise(new RedheadDuck()); // 구현한 것으로 인정

interface IPerson {
  name: string;
}

function sayHello(person: IPerson): void {
  console.log(`Hello ${person.name}`);
}

const me = { name: "Lee", age: 30 };
sayHello(me); // IPerson 타입은 아니지만 통과
