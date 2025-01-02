/*  
    * 선택적 프로퍼티 (Optional Property)
        - 프로퍼티명 뒤에 ?를 붙이면 구현 시 생략 가능
*/

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
