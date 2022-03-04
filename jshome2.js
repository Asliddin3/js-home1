var a = prompt("Ismingizni kiriting.")

console.log("Sinzning ismingiz:" + a);
var b = +prompt("Yoshingizni kiriting.")

while( isNaN(b)){
    b = +prompt("Nmadir hatto keti.Yoshingizni sonda kiriting.")
}
console.log("Yoshingiz " + b + "da");

var c = prompt("3 + 4=?")
while( isNaN(c)) {
    c = +prompt("Javobni sonda kiriting.3 + 4=?")
}
if ( c === 3 + 4 ){
    console.log("Sizning javob to'gri " + c);
} else{
    console.log("Sizning javob noto'gri " + c + " To'gri javob " + (3 + 4));
}
var d = +prompt("3 * 4=?")
while( isNaN(d)) {
    d = +prompt("Javobni sonda kiriting.3 * 4=?")
}
if ( d == 3 * 4 ){
    console.log("Sizning javob to'gri " + d);
} else{
    console.log("Sizning javob noto'gri " + d + " To'gri javob " + (3 * 4));
}
var f = +prompt("4 / 4=?")
while( isNaN(f) ) {
    f = +prompt("Javobni sonda kiriting.4 / 4=?")
}
if ( f == 4 / 4 ){
    console.log("Sizning javob to'gri " + f);
} else{
    console.log("Sizning javob noto'gri " + f + " To'gri javob " + ( 4 / 4));
}
var g = prompt("12 % 4=?")
while( isNaN(g)) {
    g = +prompt("Javobni sonda kiriting.12 % 4=?")
}
if ( g == 12 % 4 ){
    console.log("Sizning javob to'gri " + g);
} else{
    console.log("Sizning javob noto'gri " + g + " To'gri javob " + (12 % 4));
}
var h = +prompt("25 - 4=?")
while( isNaN(h)) {
    h = +prompt("Javobni sonda kiriting.25 - 4=?")
}
if ( h == 25 - 4 ){
    console.log("Sizning javob to'gri " + h);
} else{
    console.log("Sizning javob noto'gri " + h + " To'gri javob " + (25 - 4));
}