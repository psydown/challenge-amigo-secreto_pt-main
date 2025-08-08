let listaAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    // Verifica se o nome é válido
    if (!nome) {
        alert("Digite um nome válido para adicionar.");
        return;
    }

    listaAmigos.push(nome);
    input.value = "";
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("A lista está vazia. Adicione pelo menos um amigo.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceSorteado];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}
