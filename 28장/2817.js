Number.isInteger(0);
Number.isInteger(123);
Number.isInteger(-123);

Number.isInteger(0.5);
Number.isInteger('123');
Number.isInteger(false);
Number.isInteger(Infinity);
Number.isInteger(-Infinity);

//정수 외의 다른 것들 전부 false, 암묵적 타입 변환이 없음~