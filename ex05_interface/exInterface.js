"use strict";
/*
    * 인터페이스
        - 일반적으로 타입체크를 위해 사용되며 변수, 함수, 클래스에 사용할 수 있다.

        - 직접 인스턴스 생성 불가, 모든 메서드는 추상 메서드 (단, 추상 클래스처럼 abstract 키워드는 사용하지 않는다.)
        
        ※ 여러 타입을 갖는 프로퍼티로 이루어진 새로운 타입을 정의하는 것과 유사

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
// 변수의 타입으로 사용
let todo;
// Todo 인터페이스를 준수
todo = { id: 1, content: "typescript", completed: false };
let todos = [];
// 파라미터 타입으로 사용
function addTodo(todo) {
    todos = [...todos, todo];
}
const newTodo = { id: 1, content: "typescript", completed: false };
addTodo(newTodo);
console.log(todos);
// 함수의 타입으로 사용
const squareFunc = function (num) {
    return num * num;
};
// 인터페이스 구현
class Todo {
    constructor(id, content, completed) {
        this.id = id;
        this.content = content;
        this.completed = completed;
    }
}
const newTodo2 = new Todo(1, "Typescript", false);
console.log(newTodo2);
class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}
exports.Person = Person;
function greeter(person) {
    person.sayHello();
}
const me = new Person("Lee");
greeter(me);
//# sourceMappingURL=exInterface.js.map