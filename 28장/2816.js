//인수를 숫자로 암묵적 타입변환하지 않는다.
Number.isFinite(null); //false

//인수를 숫자로 암묵적 타입변환함. null의 경우 0으로 변환.
isFinite(null) //true