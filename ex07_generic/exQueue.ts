/* 
    * 제네릭 (Generic)
        - 함수 또는 클래스를 정의하는 시점에 매개변수나 반환 값의 타입을 선언하기 어려운 경우 사용
        - 한 번의 선언으로 다양한 타입에 재사용 가능
        - <T> 에서 T는 Type Parameter 라 한다. 꼭 T 안써도 됨 
*/

class Queue<T> {
  protected data: Array<T> = [];

  push(item: T) {
    this.data.push(item);
  }

  pop(): T | undefined {
    return this.data.shift();
  }
}

// number 전용 Queue
const numberQueue = new Queue<number>();
numberQueue.push(0);
numberQueue.push(+"1"); // + 연산자: 문자열 -> 숫자 변환

console.log(numberQueue.pop()?.toFixed());
console.log(numberQueue.pop()?.toFixed());
console.log(numberQueue.pop()?.toFixed());

/* 
    옵셔널 체이닝 (Optional Chaining)
        - ?. 연산자

        - 객체나 배열의 프로퍼티에 접근할 때, 
          해당 프로퍼티가 null 또는 undefined 인 경우 예외를 발생시키지 않고 undefined를 반환

        - null 이나 undefined 인 경우 toFixed() 나 toUpperCase() 를 사용하면 에러 발생
*/

// string 전용 Queue
const stringQuere = new Queue<string>();

stringQuere.push("Hello");
stringQuere.push("world");

console.log(stringQuere.pop()?.toUpperCase());
console.log(stringQuere.pop()?.toUpperCase());
console.log(stringQuere.pop()?.toUpperCase());

// 커스텀 객체 전용 Queue
const myQueue = new Queue<{ name: string; age: number }>();

myQueue.push({ name: "Lee", age: 30 });
myQueue.push({ name: "Kim", age: 20 });

console.log(myQueue.pop());
console.log(myQueue.pop());
console.log(myQueue.pop());
