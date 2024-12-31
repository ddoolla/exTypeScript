# TypeScript

> ## 설치

### 1. node.js / npm 설치

<br/>

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

> ## tsconfig.json

- 프로젝트 단위 타입스크립트 환경 설정 파일

```
{
    // 컴파일 옵션 (생략 시 기본 옵션)
    "compilerOptions": {
        "target": "es2016",
        "module": commonjs",
        "sourceMap": true
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
