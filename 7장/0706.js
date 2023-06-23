var x = "1";

//문자열을 숫자로 타입 변환
console.log(+x); //1
//부수 효과는 없다.
console.log(x); //"1"

//불리언 값을 숫자로 타입 변환한다.
x = true;
console.log(+x); //1
console.log(x); //true

//문자열을 숫자로 타입변환 할 수 없으므로 NaN을 반환
x = "Hello";
console.log(+x); //NaN

//-연산자의 경우 원래의 값에서 부호 반전
x = "10";
console.log(-x); //-10

x = true;
console.log(-x); //-1
