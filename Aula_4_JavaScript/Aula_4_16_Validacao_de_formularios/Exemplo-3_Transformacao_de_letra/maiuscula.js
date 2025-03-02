
//
function maiuscula(){
    
    // Pega o que foi digitado no id "texto" do textarea e salva na variável "letra"
    let letra = document.getElementById("texto").value;

    // Converte oque estiver na variável "letra"  para maiúscula
    letra = letra.toUpperCase();

    // Pega o texto convertido em maiúsculo e coloca no textarea
    document.getElementById("texto").value = letra;
    
}