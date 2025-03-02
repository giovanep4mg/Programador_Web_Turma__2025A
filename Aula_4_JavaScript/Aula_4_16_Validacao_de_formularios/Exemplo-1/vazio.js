function verificarForm() {
    
    console.log("verifica form ativado! ")

    //
    if (document.getElementById("nome").value == '') {
        //
        alert("Erro!! Preencha o nome! ")
    } else {

        let nome = document.getElementById("nome").value;
        
        //Mensagem de boas vindas, para o usuário com o nome que ele inseriu
        alert(`Seja bem vindo, ${nome}! `)
    }
}

