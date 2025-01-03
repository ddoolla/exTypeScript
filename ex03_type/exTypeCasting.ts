/* 타입 캐스팅 예제 */
// Element | null 타입 - value 프로퍼티가 존재하지 않기에 타입 캐스팅 필요
const $input1 = document.querySelector(
  'input[type="text"]'
) as HTMLInputElement;

const $input2 = <HTMLInputElement>document.querySelector('input[type="text"]');

// value 프로퍼티는 Element 타입의 하위 타입인 HTMLInputElement 타입에만 존재
const val1 = $input1.value;
const val2 = $input2.value;
