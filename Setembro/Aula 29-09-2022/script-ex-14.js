function tempo() {
    var idade = ipt_idade.value
    contador = 0
    msg.innerHTML = ''
    while (contador <= idade) {
        if (contador <= 4) {
        msg.innerHTML += `<br>${contador} anos(Primeira Infância)`
        contador++;    
        }
        else if(contador > 4 && contador <= 6){
            msg.innerHTML += `<br>${contador} anos(Pré-escolar)`
        contador++;
        }
        else if(contador > 6 && contador <= 10){
            msg.innerHTML += `<br>${contador} anos(Segunda Infância)`
        contador++;
        }
        else if(contador > 10 && contador <= 18){
            msg.innerHTML += `<br>${contador} anos(Adolescência)`
        contador++;
        }
        else if(contador > 18 && contador <= 50){
            msg.innerHTML += `<br>${contador} anos(Adulto)`
        contador++;
        }
        else if(contador > 50 && contador <= 100){
            msg.innerHTML += `<br>${contador} anos(Melhor idade)`
        contador++;
        }
        else{
        msg.innerHTML += `<br>${contador} anos(Matusalem)`
        contador++;
        }
        
    }
}