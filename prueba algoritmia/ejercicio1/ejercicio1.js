function leer_numero(){
    let div=document.getElementById("numeros");
    let numero=Math.floor(Math.random()*100);

    let p=document.createElement("h1");
    p.innerHTML="Numero generado: "+numero;
    div.appendChild(p);

    if(numero%2==0){
        let par=document.createElement("h3");
        par.innerHTML="El numero es par";
        div.appendChild(par);

        for(i=0; i<numero; i+2){
            let numeros=document.createElement("p");
            numero=numero-2;
            numeros.innerHTML="El siguiente numero par es "+numero;
            div.appendChild(numeros);
        }
    }else{
        let impar=document.createElement("h3");
        impar.innerHTML="El numero es impar";
        div.appendChild(impar);
        
        for(i=1; i<numero; i+2){
            let numeros=document.createElement("p");
            numero=numero-2;
            numeros.innerHTML="El siguiente numero impar es "+numero;
            div.appendChild(numeros);
        }
    }
}


window.onload = function(){
    leer_numero();
}