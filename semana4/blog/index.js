let post = {
    titulo: "",
    autor: "",
    conteudo: "",
}

let tituloPost = document.getElementById("titulo-post");
let autorPost = document.getElementById("autor-post");
let conteudoPost = document.getElementById("conteudo-post");
let arrayDePost = [];

function criarPost() {

    let novoPost = {
        titulo: tituloPost.value,
        autor: autorPost.value,
        conteudo: conteudoPost.value,
    }
    arrayDePost = [...arrayDePost,novoPost]
    console.log(arrayDePost)

    tituloPost.value = ""
    autorPost.value =""
    conteudoPost.value =""

}


function inserirPost () {
    let publicarConteudo = document.getElementById("container-de-posts");

}