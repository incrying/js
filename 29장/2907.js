//임의의 난수를 반환한다.
Math.random();//0에서 1"미만"의 랜덤 실수
const random = Math.floor((Math.random()*10)+1);//C처럼 시드 안 해줘도 됨.
console.log(random);