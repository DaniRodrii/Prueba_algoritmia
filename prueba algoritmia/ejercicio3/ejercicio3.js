
function leer_horas_trabajadas(){
    let horas=Math.floor(Math.random() * (60-20) + 20);
    return horas;
}

function leer_tarifa(){
    let tarifa=Math.floor(Math.random() * (20-6) + 6);
    return tarifa;
}

window.onload = function(){
    let horas_trabajadas=leer_horas_trabajadas();
    let tarifa=leer_tarifa();

    let div=document.getElementById("trabajo");
    let p=document.createElement("p");
    p.innerHTML="<b>Horas trabajadas =</b> "+horas_trabajadas;
    div.appendChild(p);

    p=document.createElement("p");
    p.innerHTML="<b>Tarifa =</b> "+tarifa+"€ por hora";
    div.appendChild(p);

    if(horas_trabajadas>40){
        let horas_extras=horas_trabajadas-40;
        p=document.createElement("p");
        p.innerHTML = "<b>Horas extras =</b> " + horas_extras + "h";
        div.appendChild(p);

        let sueldo_base = (horas_trabajadas - horas_extras) * tarifa;
        p = document.createElement("p");
        p.innerHTML = "<b>Sueldo 40 horas =</b> " + sueldo_base + "€";
        div.appendChild(p);

        let sueldo_extra = horas_extras * (tarifa * 0.5 + tarifa);
        p = document.createElement("p");
        p.innerHTML = "<b>Sueldo horas extras =</b> " + sueldo_extra + "€";
        div.appendChild(p);

        let sueldo_semanal = sueldo_base + sueldo_extra;
        p = document.createElement("p");
        p.innerHTML = "<b>Sueldo semanal =</b> " + sueldo_semanal + "€";
        div.appendChild(p);

        let sueldo_mensual = sueldo_semanal * 4;
        p = document.createElement("p");
        p.innerHTML = "<b>Sueldo mensual =</b> " + sueldo_mensual + "€";
        div.appendChild(p);

    }else{
        let sueldo_base = horas_trabajadas * tarifa;
        p = document.createElement("p");
        p.innerHTML = "<b>Sueldo semanal =</b> " + sueldo_base + "€";
        div.appendChild(p);

        let sueldo_mensual = sueldo_base * 4;
        p = document.createElement("p");
        p.innerHTML = "<b>Sueldo mensual =</b> " + sueldo_mensual + "€";
        div.appendChild(p);
    }
}