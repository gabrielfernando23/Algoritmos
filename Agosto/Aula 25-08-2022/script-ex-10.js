function comprar() {
    var chocolate = 0
    chocolate = choco.value
    var preco = 3
    if (chocolate <= 12) {
        div.innerHTML = `o valor da sua compra foi de ${chocolate * preco}`
    } else {
        preco = 2.50
        div.innerHTML = `o valor da sua compra foi de ${chocolate * preco}`
    }
}