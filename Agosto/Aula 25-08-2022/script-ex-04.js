function Calc() {
    var preco = 0
    preco = valor.value / amigos.value
    cad_amigo.innerHTML = `Cada amigo vai pagar R$${preco} pela pizza`
    if (preco > 20) {
        cad_amigo.innerHTML += ` Deu ruim! Pizza muito cara!`
    }
}