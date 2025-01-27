

let amigos = [];

//Adiconar amigo
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome) {
        amigos.push(nome);
        input.value = "";
    
        atualizarListaAmigos();
    } else {
        alert("Ops, parece que você esqueceu de digitar um nome!");
    }
}

// Atualizar a lista
function atualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach((amigo, list) => {
        let item = document.createElement("li");
        item.textContent = `${list + 1}. ${amigo}`;
        lista.appendChild(item);
    });
}

// Sortear amigo
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Você precisa de pelo menos dois amigos para realizar o sorteio!");
        return;
    }

    let amigoSorteado = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[amigoSorteado];

   
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${sorteado}</strong></li>`;
}
