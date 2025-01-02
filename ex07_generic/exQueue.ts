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
