function Calcular() {
    var qtd = 0
    qtd = ipt_latinha.value * 365
    div.innerHTML = `Você consome ${qtd} latinhas por ano.`
    if (qtd > 500) {
    div.innerHTML += `Cuidado com a diabetes!`
    } 
}