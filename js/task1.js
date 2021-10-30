'use strict'
// пример 1
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2, потому что префиксный инкремент увиличивает значение переменной а, после чего возвращает результат а(2)

// пример 2 
d = b++;
alert(d); // ответ: 1, при постфиксном инкременте для d сначала  возвращается результат b(1), после чего b = 2

//пример 3
c = 2 + ++a;
alert(c); // ответ: 5, благодаря префиксному инкременту мы получаем результат для а(++a) = 3 и прибавляем 2

//пример 4 
d = 2 + b++;
alert(d); // ответ: 4 при постфиксном инкременте  в данном случае b++ = 2, и только после станет 3, поэтому 2 + 2


// благодаря манипуляциям выше мы получаем итоговые значения для переменных ниже
alert(a); // ответ: 3 
alert(b); // ответ: 3