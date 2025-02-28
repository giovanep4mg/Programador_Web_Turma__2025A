
// Função que será executada quando tiver um clique na imagem.
function umClique() {

    // troca a imagem, que está na tag com id "imagem"
    document.getElementById("imagem").src = "./imagens/fachada.jpg";

    // Adiciona esse texto na página, na tag onde tem o id "log"
    document.getElementById("log").innerHTML += "Troca para a foto da fachada. <br> ";

}

// Função que será executada quando tiver dois clique na imagem.
function doisClique() {

    // troca a imagem, que está na tag com id "imagem"
    document.getElementById("imagem").src = "./imagens/ifrs.gif";

    // Adiciona esse texto na página, na tag onde tem o id "log"
    document.getElementById("log").innerHTML += "Troca para a logo do ifrs. <br> ";

}