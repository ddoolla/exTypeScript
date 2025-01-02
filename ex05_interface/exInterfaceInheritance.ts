/* 인터페이스 상속 예제 */
interface Person {
  name: string;
  age?: number;
}

interface Student extends Person {
  grade: number;
}

const student: Student = {
  name: "Lee",
  age: 20,
  grade: 3,
};

interface Developer {
  skills: string[];
}

interface WebDeveloper extends Person, Developer {}

const webDeveloper: WebDeveloper = {
  name: "Lee",
  age: 20,
  skills: ["HTML", "CSS", "JavaScript"],
};
