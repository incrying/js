var str = "string";

//문자열은 유사 배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근할 수 있다.
//하지만 문자열은 원시 값이므로 변경할 수 없다.
str[0] = "S";

console.log(str); //string
