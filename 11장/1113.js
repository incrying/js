// 할당이 이뤄지는 시점에 객체 리터럴이 해석되고, 그 결과 객체가 생성된다.
var person = {
  name: "Lee",
};

//프로퍼티 값 갱신
person.name = "Kim";

//프로퍼티 동적 생성
person.address = "Seoul";

console.log(person); //{name: "Kim", address: "Seoul"}
