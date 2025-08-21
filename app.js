let amigos = [];


function adicionarAmigo(){
    let amigosInseridos = document.querySelector('input').value;
    if (amigosInseridos == ""){
        alert('Digite um nome, por favor!');
    } else {
        amigos.push(amigosInseridos);
        console.log(amigos);
        limparCampo();
        listaDeAmigos(amigos);
    }
}


