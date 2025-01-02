/* interface 예시 */
export interface Person {
  name: string;
  age?: number;
}

const person = {} as Person; // 타입 캐스팅
person.name = "Lee";
person.age = 20;

/* type alias 예시 */
type Person2 = {
  name: string;
  age?: number;
};

const person2 = {} as Person2;
person2.name = "Lee";
person2.age = 20;

type Str = "Lee";
const strVar1: Str = "Lee";
// const strVar2: Str = "kim"; // Error

type Union = string | null;
const unionVar1: Union = "Hello";
const unionVar2: Union = null;
// const unionVar3: Union = 1; // Error

type Name = "Lee" | "Kim";
const nameVar1: Name = "Lee";
const nameVar2: Name = "Kim";
// const nameVar3: Name = 'Park'; // Error

type Num = 1 | 2 | 3 | 4 | 5;
const numVar1: Num = 1;
// const numVar2: Num = 10; // Error

type Obj = { a: 1 } | { b: 2 };
const objVar1: Obj = { a: 1 };
// const objVar2: Obj = {c: 3}; // Error

type Func = (() => string) | (() => void);
const func1: Func = function (): string {
  return "Hello";
};

const func2: Func = function (): void {
  console.log("Hello");
};

type Shape = Square | Rectangle | Circle;

interface Square {
  x: number;
  y: number;
}
interface Rectangle {
  r: number;
}
interface Circle {
  r: number;
}
interface Triangle {
  w: number;
  h: number;
}

const shape1: Shape = { x: 10, y: 20 };
const shape2: Shape = { r: 5 };
// const shape3: Shape = { w: 10, h: 5 }; // Error

type Tuple = [string, boolean];
const t1: Tuple = ["Hello", true];
// const t2: Tuple = ["Hello", "world"]; // Error
