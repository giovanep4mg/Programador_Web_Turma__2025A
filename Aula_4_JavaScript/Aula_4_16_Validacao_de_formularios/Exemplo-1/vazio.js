function verificarForm() {
    
    console.log("verifica form ativado! ")
}

function enviarDados() {
    console.log(" Função enviar dados ativa");

    // No htm na tag id "nome", pega o valor lá e salva na var "nomeUsuario"
    let nomeUsuario = document.getElementById("nome").value;

    //verifica se o nome do usuário está preenchido ou não
    if (nomeUsuario == "") {

        // Se o campo nome estiver vazio vai exibir esse texto
        alert("Por favor, preencha o nome! ");
        console.log("Nome não foi preenchido! ");

    } else {
        
        //Mensagem de boas vindas, para o usuário com o nome que ele inseriu
        alert(`Seja bem vindo, ${nomeUsuario}!`)
    }

}