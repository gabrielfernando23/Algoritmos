function Calcular() {
    var grama = Number(preco.value)
    var calda = cobertura.value
        if (calda != "C") {
            grama += 0.01}
        if (tipo.sorvete == "G")
         { grama *= 1.11}
        else { grama *= 0.90}
    var preco_total = grama * peso.value
        if (preco_total > 10) {
            div.innerHTML = `O seu sorvete vai custar ${preco_total.toFixed(2)} e vai comprometer a mesada`
            
        }
        else {div.innerHTML = `Hoje você esta maneirando. Gastou somente ${preco_total.toFixed(2)}`}
            
    peso.value = ''
    preco.value = '' 
    }