function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) >= ano ){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 2){
                //bebe
                img.setAttribute('src', 'imagem/Sem título.png')
            }else if(idade > 2 && idade < 12){
                //crianca
                img.setAttribute('src', 'imagem/crianca-m.png')
            }else if(idade >= 12 && idade < 18){
                //adolescente
                img.setAttribute('src', 'imagem/adolescente-m.png')
            }
            else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagem/jovem-m.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagem/adulto-m.png')
            }else{
                // idoso
                img.setAttribute('src', 'imagem/idoso-m.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 2){
                //bebe
                img.setAttribute('src', 'imagem/bebe-f.png')
            }else if(idade > 2 && idade < 12){
                //crianca
                img.setAttribute('src', 'imagem/crianca-f.png')
            }else if(idade >= 12 && idade < 18){
                // adolescente
                img.setAttribute('src', 'imagem/adolescente-f.png')
            }
            else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagem/jovem-f.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagem/adulto-f.png')
            }else{
                // idoso
                img.setAttribute('src', 'imagem/idoso-f.png')
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}