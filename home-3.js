var a = +prompt("Son kiriting, biz uni toq yoki jufligini aytamiz.")
 
while( isNaN(a)){
    var a = +prompt("Siz son kiritmadingiz iltimos boshqatan son kiriting")
}
if ( a % 2 === 0 ){
    alert("Siz juft son kiritingiz")
} else if( a % 2 === 1) {
    alert("Siz toq son kiritingiz.")
}