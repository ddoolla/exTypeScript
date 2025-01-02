/* 선택적 프로퍼티 예제 */
interface UserInfo {
  username: string;
  password: string;
  age?: number;
  address?: string;
}

const userInfo: UserInfo = {
  username: "Lee",
  password: "1234",
};

console.log(userInfo);
