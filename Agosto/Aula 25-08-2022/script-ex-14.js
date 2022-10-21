function calc() {
    var peso = Number(ipt_peso.value)
    var preco = Number(ipt_grama.value) 
    var cobertura = ipt_cobert.value
    if (cobertura != "C") {
        preco += 0.005
    }
    var preco_final = preco * peso
    if (preco_final > 10) {
        div.innerHTML = `Esse sorvete vai custar ${preco_final.toFixed(2)} e vai comprometer a mesada.`
    }
    else{
    div.innerHTML = `Hoje você está manerando, gastou somente ${preco_final.toFixed(2)}.`
    }
}