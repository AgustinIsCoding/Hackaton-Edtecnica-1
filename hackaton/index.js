alert('Bienvenido al sistema de verificaciòn de calidad de productos, para la determinacion del precio final de un lote de productos.');
let cantidad
let cont=0;
    while(cont==0){
    cantidad=prompt('Por favor indique la cantidad de productos a verificar') ;
    if(typeof parseInt(cantidad)=='number'){
        cont=1;
    }else{
        alert('Por favor ingrese un valor aceptado, en otras palabras un numero entero.')
    }
}
let num=cantidad
let cont2=0
let cont3=0
let arr=[]
let malo=0, defectuoso=0, bueno=0;
const precio=parseInt(prompt('Ingrese el precio de compra de lote'));
for(let i=0;i<parseInt(num);i++){
    cont3=0
    if(cont2==0){
        alert('Hay tres niveles de calidad, 0 producto malo, 1 defectuoso y 2 bueno.')
        cont2=1
    }
    while(cont3==0){ 
        arr[i]=parseInt(prompt('Por favor ingrese la calidad del producto '+(i+1)))
        if(arr[i]!=0 && arr[i]!=1&& arr[i]!=2){
            alert('Por favor ingrese un dato aceptado')
        }else{
            cont3=1;
        }
    }
    if(arr[i]==1){
        defectuoso++
    }else if(arr[i]==2){
        bueno++
    }else if(arr[i]==0){
        malo++
    }
}
if(malo>(15*parseInt(cantidad)/100)){
    alert("El precio final del lote de "+malo+" productos malos, "+defectuoso+" productos defectuosos y "+bueno+" productos buenos es de 0 Bsf.")
}else if(defectuoso<(10*parseInt(cantidad)/100) && bueno<(70*parseInt(cantidad)/100)){
    alert("El precio final del lote de "+malo+" productos malos, "+defectuoso+" productos defectuosos y "+bueno+" productos buenos es de "+(70*precio/100) +" Bsf.")
}else if(bueno>=(70*parseInt(cantidad)/100)){
    alert("El precio final del lote de "+malo+" productos malos, "+defectuoso+" productos defectuosos y "+bueno+" productos buenos es de "+precio +" Bsf.")
}else{
    alert("El precio final del lote de "+malo+" productos malos, "+defectuoso+" productos defectuosos y "+bueno+" productos buenos es de "+(60*precio/100)+" Bsf.")
}