
function sacarFactorial(){
    let numero = document.getElementById("factorial").value;
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
      resultado *= i;
    }
    document.getElementById("imprimir").innerHTML = resultado;
  }