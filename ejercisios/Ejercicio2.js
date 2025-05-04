let num = parseInt(prompt("INGRESE UN NUMERO"));
const n = Math.floor(Math.random()*101);
console.log(n)
while(num != n ){
    if (num>n) {
        window.alert("UY UY UY ESTAS POR ENCIMA ")
        num=parseInt(prompt("INGRESE UN NUMERO"))
    }else{
        window.alert("UY UY UY ESTAS POR DEBAJO ")
        num=parseInt(prompt("INGRESE UN NUMERO"))
    }
}
window.alert(`les has atinado el numero es ${n}`)