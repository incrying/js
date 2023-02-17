let numObj = new Number('10');
console.log(numObj); //Number {[[primitiveValue]]:10}

numObj = new Number('Hello');
console.log(numObj); //Number {[[primitiveValue]]:NaN}