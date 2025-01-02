# TypeScript 예제 실습

> ## TypeScript

- 자바스크립트의 상위확장(Superset)으로, 자바스크립트를 기반으로 한 정적 타입을 지원하는 프로그래밍 언어  
  (기존 자바스크립트의 동적 타이핑을 개선)

- 자바스크립트의 슈퍼셋이므로 자바스크립트 문법을 그대로 사용할 수 있다.  
  (ES6 의 새로운 기능도 마찬가지)

- 타입을 명시적으로 지정하여 컴파일 단계에서 타입을 체크하여 코드의 안전성과 오류를 미리 확인할 수 있다.

- IDE 에 타입 정보를 제공함으로써 높은 수준의 인텔리센스(IntelliSense), 코드 어시스트, 타입 체크, 리팩토링 등을 지원받을 수 있다.

- 인터페이스, 제네릭 등과 같은 강력한 객체지향 프로그래밍을 지원한다.

<br/>

> ## 환경구성

### 1. node.js / npm 설치

### 2. TypeScript 컴파일러 설치

- 타입스크립트 파일(.ts)은 브라우저에서 동작하지 않으므로 타입스크립트 컴파일러를 통해  
  자바스크립트 파일(.js)로 변환해야한다. (트랜스파일링)

```
// 전역 설치
> npm install -g typescript

// 버전 확인
> tsc -v

// 옵션 설정 파일 (tsconfig.json)
> tsc --init

// 트랜스파일링
> tsc 파일명 // 타입스크립트 파일

// 변경 자동감지 트랜스파일링
> tsc --watch | -w // 종료 ctrl + c
```

#### ※ 컴파일은 일반적으로 바이트 코드로 변환 작업을 의미하기 때문에 트랜스파일링이 적절한 표현

<br/>

---

### \* tsconfig.json

- 프로젝트 단위 타입스크립트 환경 설정 파일

```
{
    // 컴파일 옵션 (생략 시 기본 옵션)
    "compilerOptions": {
        "target": "es2016",
        "module": commonjs",
        "sourceMap": true // 소스 맵 파일(.js.map)
    },

    // 컴파일 대상 지정 (명시적으로 파일 지정)
    "files": [
        "src/file1.ts",
        "src/file2.ts"
    ],

    // 컴파일 대상 지정 (files 우선 적용)
    "include": [
        "src/**/*"
    ],
    // 컴파일 대상 제외
    "exclude": [
        "node_modules",
        "**/*.spec.ts"
    ]
}
```

#### ※ 소스 맵 파일 (.js.map) - .ts 파일과 .js 파일 간의 매핑 정보를 포함하며 디버깅을 용이하게 해줌

<br/>

---

### \* Task runner

- VSCode 와 TypeScript 컴파일러 연동
- Ctrl + Shift + P -> Tasks: Configure Task 선택 -> TypeScript - tsconfig.json 선택  
  -> tasks.json 파일 생성
- 터미널에서 tsc 명령어를 사용하지 않아도 Ctrl + Shift + B 로 명령어를 실행시킬 수 있다.

<br/>

---

### \* TypeScript Definition

- 외부 자바스크립트 라이브러리에 대해서도 타입체크를 수행하려면 해당 라이브러리의 타입이 정의되어 있는 정의 파일(Definition File)을 제공해야 한다.

- 정적 타입이 정의되어 있으면 IDE에서 제공하는 IntelliSense 와 같은 다양한 도구의 지원을 받을 수 있다.

```
// Node.js 프로젝트 초기화
// 기본 값으로 package.json 생성
> npm init -y

// lodash 라이브러리 설치
> npm install lodash

// 타입 정의 파일 설치
// devDependencies 에 추가 (개발 단계에서만 필요한 의존성)
> npm install @types/lodash --save-dev
```

<br/>

---

> ## 정적 타이핑

### \* 타입 선언

- 변수명 뒤에 타입 명시

```
// 변수 선언
const foo: string = 'hello';

// 함수 선언
function multiply(x: number, y: number): number {
    return x * y;
}

// OR 연산자로 리턴 타입 여러 개 지정 가능
function foo(): string | undefined { ... }
```

<br/>

### \* 정적 타이핑

- 변수를 선언할 때 변수에 할당할 값의 타입에 따라 사전에 타입을 명시적으로 선언하고 선언한 타입에 맞는 값을 할당

<br/>

### \* 타입 추론

- 타입스크립트는 정적 타입 언어이므로 타입을 선언하지 않더라도 타입 추론에 의해 변수의 타입이 결정된다. 이후 다른 타입의 값을 할당하면 에러가 발생한다.

```
// 자바스크립트 - 재할당 가능
let var = 1;
var = 'Hello';

// 타입스크립트 - 재할당 불가능
let var = 1;
var = 'Hello'; // Error

// 타입 미선언 시 any 타입 (사용 지양)
let var;
var = 1;
var = 'Hello';
```

<br/>

### \* 타입 캐스팅

- 기존의 타입에서 다른 타입으로 타입 캐스팅 하려면 as 키워드 또는 <> 연산자 사용

```
// as
const $input = document.querySelector('input[type="text"]') as HTMLInputElement;
const val = $input.value;

// <>
const $input = <HTMLInputElement>document.querySelector('input[type="text"]');
const val = $input.value;
```

#### ※ value 프로퍼티는 Element 타입의 하위 타입인 HTMLInputElement 타입에만 존재

<br/>

---

> ## TypeScript - Class

### \* 클래스 선언

- 클래스 몸체에 클래스 프로퍼티를 사전에 선언하여야 한다.

```
class Person {
    name: string; // 클래스 프로퍼티 선언

    constructor(name: string) {
        this.name = name;
    }
}
```

<br/>

### \* 접근 제한자

- public / protected / private
- 선언하지 않을 경우 public (default)

※ 접근 가능성은 기본적으로 동일 (클래스 내부, 자식 클래스 내부, 인스턴스)

<br/>

### \* 생성자 파라미터에 접근 제한자 선언

1. 암묵적으로 클래스 프로퍼티로 선언
2. 암묵적으로 생성자 초기화

```
// 접근 제한자 선언 O
class Person {
    constructor(private name: string) {};
}

// 접근 제한자 선언 X
class Person {
    constructor(name: string) {
        console.log(name); // 생성자 내부에서만 유효한 지역 변수
    };
}
```

<br/>

### \* readonly 키워드

- readonly 키워드가 붙은 클래스 프로퍼티는 선언 시 또는 생성자 내부에서만 값을 할당 가능
- 그 외 경우 재할당 금지. 읽기만 가능능
- 상수 선언에 사용

```
class Foo {
    private readonly MAX_LEN: number = 5; // 명시적 할당
    private readonly MSG: string;

    constructor() {
        this.MSG = 'Hello'; // 생성자 내부 할당
    }
}
```

<br/>

### \* static 키워드

- 정적 프로퍼티, 메서드 정의
- 클래스 이름으로 호출 (인스턴스로 호출 불가)

```
class Foo {
    // 정적 프로퍼티
    static staticProperty = 10;

    constructor() {};

    // 정적 메서드
    static staticMethod() {
        return 'staticMethod';
    }
}

console.log(Foo.staticProperty);
console.log(Foo.staticMethod());
```

<br/>

### \* 추상 클래스 (abstract class)

- 하나 이상의 추상 메서드 포함 (abstract 키워드)
- 일반 메서드 포함 가능
- 직접 인스턴스 생성 불가, 상속만을 위해 사용
- 상속한 클래스는 추상 메서드 반드시 구현해야 함

```
abstract class Animal {
    abstract makeSound(): void; // 추상 메서드

    move(): void {
        console.log("움직인다.");
    }
}

class Dog extends Animal {
    // 추상 메서드 구현
    makeSound(): void {
        console.log("멍멍!");
    }
}

const myDog = new Dog();
myDog.makeSound();
myDog.move();
```

<br/>

---

> ## 인터페이스

- 일반적으로 타입체크를 위해 사용되며 변수, 함수, 클래스에 사용할 수 있다.

- 직접 인스턴스 생성 불가, 모든 메서드는 추상 메서드 (단, 추상 클래스처럼 abstract 키워드 사용 X)

#### ※ 여러 타입을 갖는 프로퍼티로 이루어진 새로운 타입을 정의하는 것과 유사

```
// 변수 타입에 사용할 인터페이스 정의
interface Todo {
    id: number;
    content: string;
    completed: boolean;
}

// 변수 타입으로 사용
let todo: Todo;
let todos: Todo[] = [];

// 함수 타입에 사용할 인터페이스 정의
interface SquareFunc {
    (num: number): number;
}

// 함수 타입으로 사용
const squareFunc: SquareFunc = function (num: number) {
    return num * num;
};

// 구현 클래스에 사용할 인터페이스 정의
interface IPerson {
    name: string;
    sayHello(): void;
}

// 인터페이스 구현
class Person implements IPerson {
    constructor(public name: string) {}

    sayHello(): void {
        console.log(`Hello ${this.name}`);
    }
}
```

<br/>

### \* 덕 타이핑 (Duck Typing) / 구조적 타이핑 (Structural Typing)

- 해당 인터페이스에서 정의한 프로퍼티나 메서드를 가지고 있으면 그 인터페이스를 구현한 것으로 인정

- 해당 경우 타입 체크에서 통과할 수 있으니 주의해야 함

#### ※ 인터페이스는 자바스크립트 표준이 아니라 개발 단계에서 도움을 주기 위해 제공되는 기능. (트랜스파일링을 거치면 삭제 됨)

```
interface IPerson {
    name: string;
}

function sayHello(person: IPerson): void {
    console.log(`Hello ${person.name}`);
}

const me = {name: 'Lee', age: 30};
sayHello(me); // IPerson 타입은 아니지만 타입 체크 통과
```

<br/>

### \* 선택적 프로퍼티 (Optional Property)

- 프로퍼티명 뒤에 ?를 붙이면 구현 시 생략 가능

```
interface UserInfo {
    username: string;
    password: string;
    age?: number;     // 생략가능
    address?: string; // 생략가능
}

const userInfo: UserInfo = {
    username: 'Lee',
    password: '1234'
};
```

<br/>

### \* 인터페이스 상속

- extends 키워드를 사용하여 인터페이스 또는 클래스를 상속받을 수 있다.
- 다중 상속 가능

```
interface Person {
    name: string;
    age?: number;
}

interface Studnet extends Person {
    grade: number;
}

const student: Student = {
    name: 'Lee',
    age: 20,
    grade: 3
};
```

<br/>

---

> ## Type Alias

- 새로운 타입을 정의 (인터페이스와 유사)
- 원시 값, 유니온, 튜플 등도 타입 지정 가능
- 상속 및 구현 불가

#### ※ 인터페이스로 표현할 수 없거나, 유니온 또는 튜플을 사용해야할 때 사용

```
// 원시 타입
type Str = "Lee";
const strVar1: Str = "Lee";
const strVar2: Str = "Kim"; // Error

// 유니온 타입
type Union = string | null;
const unionVar1: Union = "Hello";
const unionVar2: Union = null;
const unionVar3: Union = 1; // Error

// 튜플 타입
type Tuple = [string, boolean];
const t1: Tuple = ["Hello", true];
const t2: Tuple = ["Hello", "World"]; // Error
```

<br/>

---

> ## 제네릭 (Generic)

- 함수 또는 클래스를 정의하는 시점에 매개변수나 반환 값의 타입을 선언하기 어려운 경우 사용
- 한 번의 선언으로 다양한 타입에 재사용 가능

```
class Queue<T> { // T: 타입 파라미터
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
numberQueue.push(1);

console.log(numberQueue.pop()?.toFixed()); // 0
console.log(numberQueue.pop()?.toFixed()); // 1
console.log(numberQueue.pop()?.toFixed()); // undefined

// string 전용 Queue
const stringQueue = new Queue<string>();
...
```

#### ※ 옵셔널 체이닝 (Optional Chaining)

- ?. 연산자

- 객체나 배열의 프로퍼티에 접근할 때, 해당 프로퍼티가 null 또는 undefined 인 경우 예외를 발생시키지 않고 undefined 를 반환

- toFixed(), toUpperCase() 등 사용 시 null 또는 undefined 로 인한 에러 방지지

---

#### [참조] [TypeScript의 소개와 개발 환경 구축](https://poiemaweb.com/typescript-introduction)
