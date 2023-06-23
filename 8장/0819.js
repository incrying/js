//foo라는 레이블 식별자가 붙은 레이블 문
foo: console.log("foo");

// foo 라는 식별자가 붙은 레이블 블록문
foo: {
  console.log(1);
  break foo;
  console.log(2);
}

console.log("Done!");

//outer라는 식별자가 붙은 레이블 for 문
outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    // i + j === 3이면。outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
    if (i + j === 3) break outer;
    console.log("inner [${i}, ${j}]");
  }
}

console.log("Done!");
