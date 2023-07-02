var person = {
  name: "Lee",
};

//프로퍼티 동적 생성
person.age = 20;

//person 객체에 age프로퍼티 존재
//delete 연산자로 age 프로퍼티 삭제 가능
delete person.age;

//person 객체에 address 프로퍼티 존재하지 않음
//따라서 delete 연산자로 프로퍼티 삭제 가능
delete person.address;

console.log(person); //{name: "Lee"}
