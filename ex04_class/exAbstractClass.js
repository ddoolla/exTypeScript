"use strict";
/*
    * 추상 클래스 (abstract class)
        - 하나 이상의 추상 메서드 포함 (abstract 키워드)
        - 일반 메서드 포함 가능
        - 직접 인스턴스 생성 불가, 상속만을 위해 사용
        - 상속한 클래스는 추상 메서드 반드시 구현해야 함
*/
class Animal {
    move() {
        console.log("roaming the earth...");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("bowwow~~");
    }
}
const myDog = new Dog();
myDog.makeSound();
myDog.move();
//# sourceMappingURL=exAbstractClass.js.map