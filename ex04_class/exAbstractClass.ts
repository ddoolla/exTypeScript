/* 추상 클래스 예제 */
abstract class Animal {
  abstract makeSound(): void;

  move(): void {
    console.log("roaming the earth...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("bowwow~~");
  }
}

const myDog = new Dog();
myDog.makeSound();
myDog.move();
