//Number.isNaN은 암묵적 타입 변환이 되지 않음.
Number.isNaN(undefined); //false

//isNaN은 인수를 숫자로 암묵적 타입변환. undefined는 NaN으로 변환 가능
isNaN(undefined); //true