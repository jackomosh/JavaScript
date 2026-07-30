let value = true;
value = String(value);
alert(typeof value);

// If the string is a valid number, Number(value) conversion works

let str = "123";
str = Number(str);
alert(typeof str);

// if the string is not a valid number, then Number(value) cannot work

let age = Number("Hello World");
alert(age);

// Boolean Conversions, values that are empty, null and undefined become false, while those with values return true

alert(Boolean(1));
alert(Boolean(0));
alert(Boolean("hello"));
alert(Boolean(""));

