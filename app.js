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

function limparCampo(){
    amigosInseridos = document.querySelector('input');
    amigosInseridos.value = '';
}

function listaDeAmigos(amigos){
    let lista = document.querySelector('ul'); //Seleciona onde a lista vai ficar
    lista.innerHTML = ''; //Limpa a lista quando for atualizado

    
    amigos.forEach(function(amigos) {
        let novoAmigoInserido = document.createElement('li');
        novoAmigoInserido.innerHTML = amigos;
        lista.appendChild(novoAmigoInserido);
    });    
}

function sortearAmigo(){
    if(amigos == ''){
        alert('Você não possui amigos para sortear!!');
    } else {
        let indiceSorteio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceSorteio];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML= amigoSorteado;
    }
}



