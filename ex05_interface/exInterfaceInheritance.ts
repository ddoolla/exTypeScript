/*  
    * 인터페이스 상속
        - extends 키워드를 사용하여 인터페이스 또는 클래스를 상속받을 수 있다.
        - 다중 상속 가능
*/

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
