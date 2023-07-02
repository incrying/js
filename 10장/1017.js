var person = {
  name: "Lee",
};

//person 객체는 age 프로퍼티가 존재하지 않음
//person 객체에 age 프로퍼티가 동적으로 생성되고 값 할당
person.age = 20;
console.log(person); //{name:"Lee", age:20}
