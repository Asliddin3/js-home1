// Yosh 
// let question =  prompt('Как вас зовут?')
// if(question === null || question === "" || question === "    "){
//     alert('Привет незнакомец')
//  } else {
// alert('Привет ' + question)
// }

var a = +prompt("Yoshingizni kiriting.")
while( isNaN(a) ){
    a = +prompt("Nmadirni nito kirgizdiz boshqatan kiriting.")
}

if ( a <= 18 && a > 0){
    a = alert("Siz oqishingiz kerak.")
} else if( a > 18 && a <= 50){
    a = alert("Ishlashingiz kerak.")
} else if( a > 50 && a <= 59 ){
    a = alert("Yaqinda pensiyaga chiqasiz.")
} else if( a > 59 && a <= 150 ){
    a = alert("Pensionerga o'xshaysiz, hali tirik bo'lsangiz.")
} else{
    a = alert("Nmadir notog'ri ketip koldi.")
}

var a = +prompt("1-chi soni kiriting.")
while( isNaN(a)){
    a = +prompt("Soni hato kiritingiz. Boshqatan kiriting")
}
var b = +prompt("2-chi soni kiriting.")
while( isNaN(b) ){
    b = +prompt("Soni hato kiritingiz. Boshqatan kiriting")
}
var c = +prompt("3-chi soni kiriting.")
while( isNaN(c)){
    c = +prompt("Soni hato kiritingiz. Boshqatan kiriting")
}

if ( (a >= b && a < c ) || (a < b && a >= c ) || (a == b && a > c ) || ( a == b && a == c) || ( a == c && (a > b || a < b))){
    a = alert("O'rta qiymat " + a)
} else if((b >= a && b < c) || (b < a && b >= c) || ( b == c && b > a)){
    a = alert("O'rta qiymat " + b)
} else if( (c >= b && c < a) || (c < b && c >= a)){
    a = alert("O'rta qiymat " + c)
} 
// else{
//     a = alert("Nmadir notog'ri ketip koldi.")
// }