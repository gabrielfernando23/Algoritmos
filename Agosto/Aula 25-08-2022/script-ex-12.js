function Verific() {
    var clima = 0
    clima = temp.value
    if (clima < 10) {
        div.innerHTML = `Apropriada p/ conservar alimento <br>
        <img src="https://cdn.w600.comps.canstockphoto.com.br/desenho-carne-ilustra%C3%A7%C3%A3o-vetor-cliparte_csp56385257.jpg">`
    } 
    else {
        div.innerHTML = `Inapropriada p/ conservar alimento <br>
       <img src="http://4.bp.blogspot.com/-bJZkFXOgyIs/UU4jr0TFwvI/AAAAAAAAABo/qy6c3Es_Ngg/s1600/bolor.jpg">`
    }
    }