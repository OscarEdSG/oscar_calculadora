function valor(x){
    document.getElementById('display').value += x;
}

function borrardisplay(y){
    document.getElementById('display').value = y;
}

function calcular_resul(){
    var resultado = eval(document.getElementById('display').value);
    document.getElementById('display').value = resultado;
}