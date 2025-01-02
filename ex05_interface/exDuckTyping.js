"use strict";
/*
    * 덕 타이핑 (Duck typing) / 구조적 타이핑 (structural typing)
        - 해당 인터페이스에서 정의한 프로퍼티나 메서드를 가지고 있으면 그 인터페이스를 구현한 것으로 인정한다.
        - 해당 경우 타입 체크에서 통과할 수 있으니 주의해야 함

    ※ 인터페이스는 자바스크립트 표준이 아니라 개발단계에서 도움을 주기 위해 제공되는 기능
       트랜스파일링을 거치면 삭제된다.
 */
// IDuck 구현
class MallarDuck {
    quack() {
        console.log("Quack!");
    }
}
// IDuck 을 구현하지 않았지만, quack() 가지고 있음
class RedheadDuck {
    quack() {
        console.log("q~uack!");
    }
}
function makeNoise(duck) {
    duck.quack();
}
makeNoise(new MallarDuck());
makeNoise(new RedheadDuck()); // 구현한 것으로 인정
function sayHello(person) {
    console.log(`Hello ${person.name}`);
}
const me = { name: "Lee", age: 30 };
sayHello(me); // IPerson 타입은 아니지만 통과
//# sourceMappingURL=exDuckTyping.js.map