/*  
    * 인터페이스
        - 일반적으로 타입체크를 위해 사용되며 변수, 함수, 클래스에 사용할 수 있다.

        - 직접 인스턴스 생성 불가, 모든 메서드는 추상 메서드 (단, 추상 클래스처럼 abstract 키워드는 사용하지 않는다.)
        
        ※ 여러 타입을 갖는 프로퍼티로 이루어진 새로운 타입을 정의하는 것과 유사

*/

/* Todo 인터페이스 정의 */
interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

// 변수의 타입으로 사용
let todo: Todo;

// Todo 인터페이스를 준수
todo = { id: 1, content: "typescript", completed: false };

let todos: Todo[] = [];

// 파라미터 타입으로 사용
function addTodo(todo: Todo) {
  todos = [...todos, todo];
}

const newTodo: Todo = { id: 1, content: "typescript", completed: false };
addTodo(newTodo);
console.log(todos);

/* SquareFunc 인터페이스 정의 */
interface SquareFunc {
  (num: number): number; // 파라미터 리스트, 리턴 타입
}

// 함수의 타입으로 사용
const squareFunc: SquareFunc = function (num: number) {
  return num * num;
};

/* ITodo 인터페이스 정의 */
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
