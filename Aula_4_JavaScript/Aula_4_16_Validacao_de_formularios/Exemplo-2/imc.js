
//
function calcularIMC() {

    // Retorna os campos de entrada para as cores "brancas", como  fica quando não tem erros
    document.getElementById("peso").style.borderColor = "#ffffff";
    document.getElementById("peso").style.backgroundColor = "#ffffff"
    document.getElementById("altura").style.borderColor = "#ffffff";
    document.getElementById("altura").style.backgroundColor = "#ffffff"


    // Se, estiver vazio o campo de texto, com id "peso" 
    if (document.getElementById("peso").value == "") {
        
        // Abre uma caixa de alerta para avisar o usuário
        alert("Preencha o peso! ")

        // Deixará o campo de "peso" vermelho
        document.getElementById("peso").style.borderColor = "red";

        // Mudará o fundo do campo "peso"
        document.getElementById("peso").style.backgroundColor = "#ffe5e5"

        // Dá um aviso no campo "peso", para usuário ver onde está o erro.
        document.getElementById("peso").focus();

        return false;
    }
    // Se, estiver vazio o campo de texto, com id "altura" 
    if (document.getElementById("altura").value == "") {
        
        // Abre uma caixa de alerta para avisar o usuário
        alert("Preencha o altura! ")

        // Deixará o campo de "altura" vermelho
        document.getElementById("altura").style.borderColor = "red";

        // Mudará o fundo do campo "altura"
        document.getElementById("altura").style.backgroundColor = "#ffe5e5"

        // Dá um aviso no campo "altura", para usuário ver onde está o erro.
        document.getElementById("altura").focus();

        return false;
    }

    // Pega o valor digitado no campo "peso", converte para número float, e salva na variável "peso"
    let peso = parseFloat( document.getElementById("peso").value );
    //
    let altura = parseFloat(document.getElementById("altura").value);
    
    // Faz o cálculo do IMC e salva na variável "resultado"
    let resultado = peso / (altura * altura);

    // Exibi uma caixa de alerta para o usuário com o resultado
    alert(`Seu IMC é: ${resultado}`);

    return false;
    
}