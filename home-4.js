var a = +prompt("Soni kiriting." , "")

while( isNaN(a) ){
    a = +prompt("Soni hato kiritingiz.Togirlang." , "");
}

var b = +prompt("Soni darajasini kiriting.")
while( isNaN(b)){
    b = +prompt("Soni hato kiritingiz.Togirlang.");
}
var c = a ** b
alert(c)