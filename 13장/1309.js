var x = 1;

function foo(){
    var x = 10;
    bar();
}

function bar(){
    console.log(x);
}

foo(); //?
bar(); //?

//JS는 렉시컬 스코프를 따르므로 1을 두 번 출력함.