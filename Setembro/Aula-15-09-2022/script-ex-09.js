function escolha() {
    var hobby = sel_hobby.value
    var dias = sel_dias.value 
    var tamanho = 300 / dias
    if (hobby == 'dance') {
        if (dias == 1) {
            imagem.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/1061/1924/files/Dancer_With_Red_Dress_Emoji_400x400.png" width="50">`
        }
        else if (dias == 2){
            imagem.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/1061/1924/files/Dancer_With_Red_Dress_Emoji_400x400.png" width="100">`
        }
        else if (dias == 3){
            imagem.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/1061/1924/files/Dancer_With_Red_Dress_Emoji_400x400.png" width="150">`
        }
        else if (dias == 4){
            imagem.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/1061/1924/files/Dancer_With_Red_Dress_Emoji_400x400.png" width="200">`

        }
        else if(dias == 5){
            imagem.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/1061/1924/files/Dancer_With_Red_Dress_Emoji_400x400.png" width="250">`
        }
        else{imagem.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/1061/1924/files/Dancer_With_Red_Dress_Emoji_400x400.png" width="300">`}
    }

    if (hobby == 'videogame') {
        if (dias == 1) {
            imagem.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/1061/1924/files/Virus_Emoji_400x400.png" width="50">`
        }
        else if (dias == 2){
            imagem.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/1061/1924/files/Virus_Emoji_400x400.png" width="100">`
        }
        else if (dias == 3){
            imagem.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/1061/1924/files/Virus_Emoji_400x400.png" width="150">`
        }
        else if (dias == 4){
            imagem.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/1061/1924/files/Virus_Emoji_400x400.png" width="200">`

        }
        else if(dias == 5){
            imagem.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/1061/1924/files/Virus_Emoji_400x400.png" width="250">`
        }
        else{imagem.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/1061/1924/files/Virus_Emoji_400x400.png" width="300">`}
    }
   
    if (hobby == 'streaming') {
        if (dias == 1) {
            imagem.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/1061/1924/files/Man_Bowing_Emoji_400x40
            0.png" width="50">`
        }
        else if (dias == 2){
            imagem.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/1061/1924/files/Man_Bowing_Emoji_400x40
            0.png" width="100">`
        }
        else if (dias == 3){
            imagem.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/1061/1924/files/Man_Bowing_Emoji_400x40
            0.png" width="150">`
        }
        else if (dias == 4){
            imagem.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/1061/1924/files/Man_Bowing_Emoji_400x40
        0.png" width="200">`

        }
        else if(dias == 5){
            imagem.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/1061/1924/files/Man_Bowing_Emoji_400x40
            0.png" width="250">`
        }
        else{imagem.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/1061/1924/files/Man_Bowing_Emoji_400x40
        0.png" width="300">`}
    }

    if (hobby == 'rock') {
        if (dias == 1) {
            imagem.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_uo5ZWhzsTlpCUGrYS_U_WjQPGIVQt7DDw&usqp=CAU" width="50">`
        }
        else if (dias == 2){
            imagem.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_uo5ZWhzsTlpCUGrYS_U_WjQPGIVQt7DDw&usqp=CAU" width="100">`
        }
        else if (dias == 3){
            imagem.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_uo5ZWhzsTlpCUGrYS_U_WjQPGIVQt7DDw&usqp=CAU" width="150">`
        }
        else if (dias == 4){
            imagem.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_uo5ZWhzsTlpCUGrYS_U_WjQPGIVQt7DDw&usqp=CAU" width="200">`
        }
        else if(dias == 5){
            imagem.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_uo5ZWhzsTlpCUGrYS_U_WjQPGIVQt7DDw&usqp=CAU" width="250">`
        }
        else{imagem.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_uo5ZWhzsTlpCUGrYS_U_WjQPGIVQt7DDw&usqp=CAU" width="300">`}
    }
}
