function Porcentagem() {
    var porcent = 0
    porcent = prest.value / renda.value * 100
    renda_comprometida.innerHTML = `a prestação corresponde a ${porcent.toFixed(2)}% da renda familiar`
    if (porcent > 30) {
        renda_comprometida.innerHTML += `<br> <font color="red"><b>Será necessário complementar a renda familiar </font> </b>`

    }
}