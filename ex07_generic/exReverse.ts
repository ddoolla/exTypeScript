function reverse<T>(items: T[]): T[] {
  return items.reverse();
}

const numArg = [1, 2, 3, 4, 5];
const reversed1 = reverse(numArg);
console.log(reversed1);

const objArg = [{ name: "Lee" }, { name: "Kim" }];
const reversed2 = reverse(objArg);
console.log(reversed2);
