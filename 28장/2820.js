//안전한 정수값은 -(2^53-1)_(2^53-1) 사이에 존재
Number.isSafeInteger(0) //true
//암묵적 타입 변환이 없고 범위를 넘어서면 false를 반환함.
