var elem = null;
//elem이 nll이나 undefined와 같은 falsy 값이면 elem으로 평가되고
//elem이 Truthy 값이면 elem.value로 평가된다.
var value = elem && elem.value; //null