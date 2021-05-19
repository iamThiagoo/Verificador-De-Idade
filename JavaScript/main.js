function verificação(){
    let data = new Date();
    let ano = data.getFullYear();
    let anoNascimento = document.getElementById('anoDeNascimento');
    let res = document.getElementById('resultado');

    if ( anoNascimento.value.length == 0 || anoNascimento.value > ano || anoNascimento.value < 1900){
       alert("[ERRO] Verifique os dados e tente novamente!");
    }
    else{
        let sex = document.getElementsByName('radiosex');
        let idade = ano - Number(anoNascimento.value);
        ///let fotin = document.getElementById('imagem');
        let fotin = document.getElementById("imagem");
        let genero = ''
        if (sex[0].checked) {
            genero = "homem"
                if ( idade >= 0 && idade <= 4){
                    fotin.setAttribute('src' , "/Imagens/bebe-m.jpg");
                } // bebe
                else if ( idade >= 5 && idade <= 12){
                    fotin.setAttribute('src' , '/Imagens/menino.jpg');
                } // criança
                else if ( idade >= 13 && idade <= 17){
                    fotin.setAttribute('src' , '/Imagens/rapaz.jpg');
                } // adolescente
                else if ( idade >= 18 && idade <= 29){
                    fotin.setAttribute('src' , '/Imagens/adulto-m1.jpg');
                } // jovem adulto
                else if ( idade >= 30 && idade <= 59){
                    fotin.setAttribute('src' , '/Imagens/adulto-m2.jpg');
                } // adulto
                else if ( idade >= 60){
                    fotin.setAttribute('src' , '/Imagens/IDOSO.jpg');
                } // idoso
        } 
        else if (sex[1].checked) {
            genero = "mulher"
            if ( idade >= 0 && idade <= 4){
                fotin.setAttribute('src' , "/Imagens/bebe-f.jpg");
            } // bebe
            else if ( idade >= 5 && idade <= 12){
                fotin.setAttribute('src' , '/Imagens/menina.jpg');
            } // criança
            else if ( idade >= 13 && idade <= 17){
                fotin.setAttribute('src' , '/Imagens/garota.jpg');
            } // adolescente
            else if ( idade >= 18 && idade <= 29){
                fotin.setAttribute('src' , '/Imagens/adulto-f1.jpg');
            } // jovem adulto
            else if ( idade >= 30 && idade <= 59){
                fotin.setAttribute('src' , '/Imagens/adulto-f2.jpg');
            } // adulto
            else if ( idade >= 60){
                fotin.setAttribute('src' , '/Imagens/IDOSA.jpg');
            } // idoso
        } 
        else {
            alert("[ERRO] É necessário escolher um sexo! Tente novamente.");
        }
        
        res.innerHTML = "Detectamos um(a) " + genero + " com " + idade + " anos de idade.";
        res.style.fontSize = 34 + "px";
        res.style.marginTop = 15 + "px";
    }
}