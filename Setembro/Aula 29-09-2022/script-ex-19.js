function trajeto() {
    var onibus = Number(ipt_onibus.value)
    var trem = Number(ipt_trem.value)
    var metro = Number(ipt_metro.value)
    var contador_onibus = 1
    var contador_trem = 1
    var contador_metro = 1
    bus.innerHTML = ''
    train.innerHTML = ''
    subway.innerHTML = ''
    while (contador_onibus <= onibus || contador_metro <= metro || contador_trem <= trem) {
        if (contador_onibus <= onibus) {
            if (contador_onibus == 2) {
                bus.innerHTML += `Pegando o ${contador_onibus}º buzão Começando a cansar<br>`
                contador_onibus++;
            }
            else if (contador_onibus >= 3){
                bus.innerHTML += `Pegando o ${contador_onibus}º buzão Já cansado<br>`
                contador_onibus++;
            } 
            else {
                bus.innerHTML += `Pegando o ${contador_onibus}º buzão<br>`
                contador_onibus++;
            }
        }
        else if (contador_trem <= trem) {
            if (contador_trem == 2) {
                train.innerHTML += `Pegando o ${contador_trem}º trem Começando a cansar<br>`
                contador_trem++;
            } 
            else if (contador_trem >= 3) {
                train.innerHTML += `Pegando o ${contador_onibus}º buzão Já cansado<br>`
                contador_trem++;
            }
            else {
                train.innerHTML += `Pegando o ${contador_trem}º trem<br>`
                contador_trem++;
            }
        }
        else{
            if (contador_metro == 2) {
                subway.innerHTML += `Pegando o ${contador_metro}º buzão Começando a cansar<br>`
                contador_metro++;
            }
            else if(contador_metro >= 3){
                subway.innerHTML += `Pegando o ${contador_metro}º buzão Já cansado<br>`
                contador_metro++;
            }
            else{
                subway.innerHTML += `Pegando o ${contador_metro}º metrô<br>`
                contador_metro++;
            }
            }
        }
    
    }