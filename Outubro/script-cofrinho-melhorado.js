function validar() {
    if (ipt_mes.value <= 0 || ipt_meses.value <10 || ipt_taxa.value < 0.5 || ipt_taxa.value > 2) {
        alert('O Valor poupado mensalmente precisa ser maior que 0!<br>A quantidade de meses deve ser maior que 10!<br>A taxa tem que estar entre 0,5 e 2!')
    }
    else{guardar();}
}
function guardar() {
var guardado = Number(ipt_guard.value)
var saldo_inicial = guardado
var mes = Number(ipt_mes.value)
var meses = Number(ipt_meses.value)
var taxa = (Number(ipt_taxa.value) / 100) + 1
var contador = 0
var total = 0
cash.innerHTML = ''
while (contador < meses) {
    contador++;
    total = (saldo_inicial + mes)* taxa
    cash.innerHTML += `Mês ${contador} - saldo inicial = R$${saldo_inicial.toFixed(2)} saldo final = R$${total.toFixed(2)}<br>`
    if (contador == meses) {
        cash.innerHTML += `<br>Você começou com R$${guardado.toFixed(2)}<br>Depositou R$${(mes * meses).toFixed(2)}<br>E agora você tem: R$${total.toFixed(2)}<br>Neste período sua conta rendeu R$${(total - (guardado + (mes * meses))).toFixed(2)}<br>Sua rentabilidade foi de ${(((total - (guardado + (mes * meses))) / (mes * meses))* 100).toFixed(2)}%`
    }
    saldo_inicial = total
}
}