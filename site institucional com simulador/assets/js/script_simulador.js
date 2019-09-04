// calculando prejuizos;

btn_calcular = document.getElementById("calcular");
btn_calcular.onclick = function(){
    input_gastos = document.getElementById("gastos");
    input_vezes = document.getElementById("idas");
    
    if(input_gastos.value != "" && input_vezes.value != ""){
        calcular(input_gastos.value , input_vezes.value);
    }else{
        alert("preencha todos os campos");
    }
}

function calcular(gastos , vezes){
    gastos = parseFloat(gastos);
    vezes = parseFloat(vezes);
    prejuizos = document.getElementById("prejuizos");
    result = gastos*vezes;
    prejuizos.innerHTML = `Prejuizo R$ : ${result}`;
}

// clicando no botão calculo de gastos;

calculo_gastos = document.getElementById("btn-gastos");
calculo_gastos.onclick = function(){
    modal = document.getElementById("modal");
    modal.style.top = "0px";
    modal.style.transition = "all .4s linear";
}

// click no botão cancelar;

cancelar = document.getElementById("cancelar");
cancelar.onclick = function(){
    modal = document.getElementById("modal");
    modal.style.top = "-250px";
    modal.style.transition = "all .4s linear";
}