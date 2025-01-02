/* readonly 파라미터 예제 */
export class Foo {
  private readonly MAX_LEN: number = 5;
  private readonly MSG: string;

  constructor() {
    this.MSG = "hello";
  }

  log() {
    // this.MAX_LEN = 10; // 재할당 금지
    // this.MSG = "Hi"; // 재할당 금지

    console.log(`MAX_LEN: ${this.MAX_LEN}`);
    console.log(`MSG: ${this.MSG}`);
  }
}
