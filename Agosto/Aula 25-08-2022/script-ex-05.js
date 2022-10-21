function Calcular() {
    var preco = 0
    preco = qtd.value * 0.85
    if (qtd.value < 100) {
        alert(`A conta deu ${preco * 0.90}`)
    } else {
        alert(`A conta deu ${preco}`)
    }
    
}