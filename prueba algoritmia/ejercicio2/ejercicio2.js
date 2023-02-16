var personas=[];

function leer_personas(){
    let div=document.getElementById("personas");
    let div2=document.getElementById("cantidad");

    for(i=1; i<51; i++){
        let edad=Math.floor(Math.random()*100);
        let sexo;
        let probabilidad=Math.floor(Math.random()*100);
        if(probabilidad%2==0){
            sexo="Hombre";
        }else{
            sexo="Mujer";
        }
        let datos={"sexo":sexo, "edad":edad}
        personas.push(datos);
    }

    let cant1=0;
    let cant2=0;
    let cant3=0;
    let cant4=0;
    let cant5=0;
    let porcentaje=0;

    personas.forEach((element, index) => {
        let p=document.createElement("p")
        let pos=index+1;
        p.innerHTML="<b>Persona "+pos+"</b> tiene "+element.edad+" años y es "+element.sexo;
        div.appendChild(p);

        if(element.edad>=18){
            cant1++;
        }

        if(element.edad>=18 && element.sexo=="Hombre"){
            cant3++;
        }

        if(element.edad<18){
            cant2++;
        }

        if(element.edad<18 && element.sexo=="Mujer"){
            cant4++;
        }

        if(element.sexo=="Mujer"){
            cant5++;

            porcentaje=(cant5*100)/50;
        }

    });

    let ejer1=document.createElement("p");
    ejer1.innerHTML="Son mayores de edad "+cant1+" personas";
    div2.appendChild(ejer1);

    let ejer2=document.createElement("p");
    ejer2.innerHTML="Son menores de edad "+cant2+" personas";
    div2.appendChild(ejer2);

    let ejer3=document.createElement("p");
    ejer3.innerHTML="Son mayores de edad y hombres "+cant3+" personas";
    div2.appendChild(ejer3);

    let ejer4=document.createElement("p");
    ejer4.innerHTML="Son menores de edad y mujeres "+cant4+" personas";
    div2.appendChild(ejer4);

    let ejer5=document.createElement("p");
    ejer5.innerHTML="Son mujeres el "+porcentaje+" %";
    div2.appendChild(ejer5);
}

window.onload = function(){
    leer_personas();
}