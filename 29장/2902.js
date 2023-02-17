//절대값을 반환하는 메서드. 뭐가 바뀌고 안 바뀌는지 봐두기

Math.abs(-1); //1
Math.abs('-1'); //1
Math.abs(''); //0
Math.abs([]); //0
Math.abs(null); //0
Math.abs(undefined); //NaN
Math.abs({}); //NaN
Math.abs('string'); //NaN
Math.abs(); //Nan     