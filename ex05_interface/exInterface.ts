/* 인터페이스 예제 */

/* 변수 타입에 사용할 인터페이스 정의 */
interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

// 변수 타입으로 사용
let todo: Todo;
todo = { id: 1, content: "typescript", completed: false };
let todos: Todo[] = [];

// 파라미터 타입으로 사용
function addTodo(todo: Todo) {
  todos = [...todos, todo];
}

const newTodo: Todo = { id: 1, content: "typescript", completed: false };
addTodo(newTodo);
console.log(todos);

/* 함수 타입에 사용할 인터페이스 정의 */
interface SquareFunc {
  (num: number): number;
}

// 함수 타입으로 사용
const squareFunc: SquareFunc = function (num: number) {
  return num * num;
};

/* 구현 클래스에 사용할 인터페이스 정의 */
interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

// 인터페이스 구현
class Todo implements ITodo {
  constructor(
    public id: number,
    public content: string,
    public completed: boolean
  ) {}
}

const newTodo2 = new Todo(1, "Typescript", false);
console.log(newTodo2);

interface IPerson {
  name: string;
  sayHello(): void;
}

export class Person implements IPerson {
  constructor(public name: string) {}

  sayHello(): void {
    console.log(`Hello ${this.name}`);
  }
}

function greeter(person: IPerson): void {
  person.sayHello();
}

const me = new Person("Lee");
greeter(me);
