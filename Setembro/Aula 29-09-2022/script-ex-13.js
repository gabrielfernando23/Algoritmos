function exibir() {
    var dias = Number(ipt_vezes.value)
    var musc = 'Musculação'
    var desc = 'Comer, dormir etc'
    var contador = 1
    var dias_musc = 0
    msg.innerHTML = `Dia 1 -${musc}<br>`
    dias_musc = dias
    while (contador < 30) {
       if (dias_musc == contador) {
           contador++;
           msg.innerHTML += `Dia ${contador}- ${musc}<br>`
            dias_musc += dias;
       }
        else{
            contador++;
            msg.innerHTML += `Dia ${contador}- ${desc}<br>`
        }
        
        
    }
}