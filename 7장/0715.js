//NaN은 자신과 일치하지 않는 유일한 값이므로 주의
NaN === NaN; //false

//Number.isNaN 함수는 지정한 값이 NaN인지 확인하고 그 결과를 불리언 값으로 반환
Number.isNaN(NaN); // true
Number.isNaN(10); //false
Number.isNaN(1 + undefined); //true
