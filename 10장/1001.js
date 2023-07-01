var person = {
  name: "Lee",
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}.`);
  },
};

console.log(typeof person); //object
console.log(person); //{name: "Lee", sayHello: f}

//중괄호 내에 프로퍼티를 정의하지 않으면 빈 객체 생성
var empty = {}; //빈 객체
console.log(typeof empty); //object
