let num=parseInt(prompt("ingrese la tabla de multiplicar que desea calcular (1/10)"))
if(num<=10 & num>=0){
    for(let i=1;i<=10;i++){
        console.log(`${num}x${i}= ${num*i}`)
        window.alert(`${num}x${i}= ${num*i}`)
        
    }
}
window.alert("El numero no esta dentro de los parametros")