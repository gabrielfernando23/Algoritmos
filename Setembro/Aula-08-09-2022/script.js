function calc() {
    var nome = ipt_nome.value
    var faixa = ipt_faixa.value
    var vit = Number(ipt_vit.value)
    var empt = Number(ipt_empt.value)
    var der = Number(ipt_der.value)
    var pontos = 0
    var lutas = vit + empt + der
    var pontos_vit = 0
    var porcent_ptinit = 0
    var porcent_ptsconq = 0
    var porcent_derempt = 0
    var porcent_total = 0
    var porcent_lutsvit = 0
    if (faixa == 'Branca') {
        pontos = 0 + (vit * 4) + (empt * 2) - (der * 2)
        pontos_vit = 0 + (lutas * 4)
        porcent_ptinit = (0 / pontos) * 100
        porcent_ptsconq = ((pontos - 0) / pontos) * 100
        porcent_derempt = ((der + empt) / lutas * 100)
        porcent_total = (pontos / pontos_vit) * 100
        porcent_lutsvit = (vit / lutas) * 100
        div.innerHTML += `<br><br>${nome} da faixa ${faixa} tem ${pontos} pontos, sendo ${porcent_ptinit.toFixed(2)}% dos pontos iniciais da faixa e ${porcent_ptsconq.toFixed(2)}% em pontos conquistados em lutas <br>
        Total de lutas: ${lutas} sendo ${porcent_lutsvit.toFixed(2)}% vitórias e ${porcent_derempt.toFixed(2)}% derrotas ou empates<br>
        Se ${nome} tivesse vitória em todas as lutas ele teria ${pontos_vit} pontos, hoje ele tem ${porcent_total.toFixed(2)}% do total`
    }
    else if (faixa == 'Azul') {
        pontos = 1000 + (vit * 10) + (empt * 2) - (der * 5)
        pontos_vit = 1000 + (lutas * 10)
        porcent_ptinit = (1000 / pontos) * 100
        porcent_ptsconq = ((pontos - 1000) / pontos) * 100
        porcent_derempt = ((der + empt) / lutas * 100)
        porcent_total = (pontos / pontos_vit) * 100
        porcent_lutsvit = (vit / lutas) * 100
        div.innerHTML += `<br><br>${nome} da faixa ${faixa} tem ${pontos} pontos, sendo ${porcent_ptinit.toFixed(2)}% dos pontos iniciais da faixa e ${porcent_ptsconq.toFixed(2)}% em pontos conquistados em lutas <br>
        Total de lutas: ${lutas} sendo ${porcent_lutsvit.toFixed(2)}% vitórias e ${porcent_derempt.toFixed(2)}% derrotas ou empates<br>
        Se ${nome} tivesse vitória em todas as lutas ele teria ${pontos_vit} pontos, hoje ele tem ${porcent_total.toFixed(2)}% do total`
    }
    else if (faixa == 'Amarela') {
        pontos = 2000 + (vit * 30) + (empt * 2) - (der * 15)
        pontos_vit = 2000 + (lutas * 30)
        porcent_ptinit = (2000 / pontos) * 100
        porcent_ptsconq = ((pontos - 2000) / pontos) * 100
        porcent_derempt = ((der + empt) / lutas * 100)
        porcent_total = (pontos / pontos_vit) * 100
        porcent_lutsvit = (vit / lutas) * 100
        div.innerHTML += `<br><br>${nome} da faixa ${faixa} tem ${pontos} pontos, sendo ${porcent_ptinit.toFixed(2)}% dos pontos iniciais da faixa e ${porcent_ptsconq.toFixed(2)}% em pontos conquistados em lutas <br>
        Total de lutas: ${lutas} sendo ${porcent_lutsvit.toFixed(2)}% vitórias e ${porcent_derempt.toFixed(2)}% derrotas ou empates<br>
        Se ${nome} tivesse vitória em todas as lutas ele teria ${pontos_vit} pontos, hoje ele tem ${porcent_total.toFixed(2)}% do total`
    }
    else if (faixa == 'Laranja') {
        pontos = 5000 + (vit * 60) + (empt * 2) - (der * 30)
        pontos_vit = 5000 + (lutas * 60)
        porcent_ptinit = (5000 / pontos) * 100
        porcent_ptsconq = ((pontos - 5000) / pontos) * 100
        porcent_derempt = ((der + empt) / lutas * 100)
        porcent_total = (pontos / pontos_vit) * 100
        porcent_lutsvit = (vit / lutas) * 100
        div.innerHTML += `<br><br>${nome} da faixa ${faixa} tem ${pontos} pontos, sendo ${porcent_ptinit.toFixed(2)}% dos pontos iniciais da faixa e ${porcent_ptsconq.toFixed(2)}% em pontos conquistados em lutas <br>
        Total de lutas: ${lutas} sendo ${porcent_lutsvit.toFixed(2)}% vitórias e ${porcent_derempt.toFixed(2)}% derrotas ou empates<br>
        Se ${nome} tivesse vitória em todas as lutas ele teria ${pontos_vit} pontos, hoje ele tem ${porcent_total.toFixed(2)}% do total`
    }
    else if (faixa == 'Verde') {
        pontos = 10000 + (vit * 100) + (empt * 2) - (der * 50)
        pontos_vit = 10000 + (lutas * 100)
        porcent_ptinit = (10000 / pontos) * 100
        porcent_ptsconq = ((pontos - 10000) / pontos) * 100
        porcent_derempt = ((der + empt) / lutas * 100)
        porcent_total = (pontos / pontos_vit) * 100
        porcent_lutsvit = (vit / lutas) * 100
        div.innerHTML += `<br><br>${nome} da faixa ${faixa} tem ${pontos} pontos, sendo ${porcent_ptinit.toFixed(2)}% dos pontos iniciais da faixa e ${porcent_ptsconq.toFixed(2)}% em pontos conquistados em lutas <br>
        Total de lutas: ${lutas} sendo ${porcent_lutsvit.toFixed(2)}% vitórias e ${porcent_derempt.toFixed(2)}% derrotas ou empates<br>
        Se ${nome} tivesse vitória em todas as lutas ele teria ${pontos_vit} pontos, hoje ele tem ${porcent_total.toFixed(2)}% do total`
    }
    else if (faixa == 'Roxa') {
        pontos = 15000 + (vit * 150) + (empt * 2) - (der * 75)
        pontos_vit = 15000 + (lutas * 150)
        porcent_ptinit = (15000 / pontos) * 100
        porcent_ptsconq = ((pontos - 15000) / pontos) * 100
        porcent_derempt = ((der + empt) / lutas * 100)
        porcent_total = (pontos / pontos_vit) * 100
        porcent_lutsvit = (vit / lutas) * 100
        div.innerHTML += `<br><br>${nome} da faixa ${faixa} tem ${pontos} pontos, sendo ${porcent_ptinit.toFixed(2)}% dos pontos iniciais da faixa e ${porcent_ptsconq.toFixed(2)}% em pontos conquistados em lutas <br>
        Total de lutas: ${lutas} sendo ${porcent_lutsvit.toFixed(2)}% vitórias e ${porcent_derempt.toFixed(2)}% derrotas ou empates<br>
        Se ${nome} tivesse vitória em todas as lutas ele teria ${pontos_vit} pontos, hoje ele tem ${porcent_total.toFixed(2)}% do total`
    }
    else if (faixa == 'Marrom') {
        pontos = 25000 + (vit * 300) + (empt * 2) - (der * 150)
        pontos_vit = 25000 + (lutas * 300)
        porcent_ptinit = (25000 / pontos) * 100
        porcent_ptsconq = ((pontos - 25000) / pontos) * 100
        porcent_derempt = ((der + empt) / lutas * 100)
        porcent_total = (pontos / pontos_vit) * 100
        porcent_lutsvit = (vit / lutas) * 100
        div.innerHTML += `<br><br>${nome} da faixa ${faixa} tem ${pontos} pontos, sendo ${porcent_ptinit.toFixed(2)}% dos pontos iniciais da faixa e ${porcent_ptsconq.toFixed(2)}% em pontos conquistados em lutas <br>
        Total de lutas: ${lutas} sendo ${porcent_lutsvit.toFixed(2)}% vitórias e ${porcent_derempt.toFixed(2)}% derrotas ou empates<br>
        Se ${nome} tivesse vitória em todas as lutas ele teria ${pontos_vit} pontos, hoje ele tem ${porcent_total.toFixed(2)}% do total`
    }
    else if (faixa == 'Preta') {
        pontos = 50000 + (vit * 500) + (empt * 2) - (der * 250)
        pontos_vit = 50000 + (lutas * 500)
        porcent_ptinit = (50000 / pontos) * 100
        porcent_ptsconq = ((pontos - 50000) / pontos) * 100
        porcent_derempt = ((der + empt) / lutas * 100)
        porcent_total = (pontos / pontos_vit) * 100
        porcent_lutsvit = (vit / lutas) * 100
        div.innerHTML += `<br><br>${nome} da faixa ${faixa} tem ${pontos} pontos, sendo ${porcent_ptinit.toFixed(2)}% dos pontos iniciais da faixa e ${porcent_ptsconq.toFixed(2)}% em pontos conquistados em lutas <br>
        Total de lutas: ${lutas} sendo ${porcent_lutsvit.toFixed(2)}% vitórias e ${porcent_derempt.toFixed(2)}% derrotas ou empates<br>
        Se ${nome} tivesse vitória em todas as lutas ele teria ${pontos_vit} pontos, hoje ele tem ${porcent_total.toFixed(2)}% do total`
    }
    else {
     div.innerHTML += `<br><br>Você digitou um valor incorreto. Tente Novamente!`   
    }
}
