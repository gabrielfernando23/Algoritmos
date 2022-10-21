function analise() {
    var saldo_dois = Number(ipt_saldo.value) - Number(ipt_debito.value)
        novo.innerHTML = `o saldo atual da conta corrente é ${saldo_dois}`
        if (saldo_dois < 0) {
        novo.innerHTML = `<font color="red"><b> o saldo atual da conta corrente é ${saldo_dois}</b></font>`    
        }
    }
    