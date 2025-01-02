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

#### [참조] [TypeScript의 소개와 개발 환경 구축](https://poiemaweb.com/typescript-introduction)
