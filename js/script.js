let usuarios = [
  { nome: "João", pontos: 80 },
  { nome: "Maria", pontos: 65 },
  { nome: "Carlos", pontos: 40 },
];

// usuário fixo (logado)
let usuarioAtual = "Você";

function adicionarPontos() {
  const valor = parseInt(document.getElementById("acao").value);

  // procura usuário atual
  let usuario = usuarios.find((u) => u.nome === usuarioAtual);

  if (usuario) {
    usuario.pontos += valor;
  } else {
    usuarios.push({ nome: usuarioAtual, pontos: valor });
  }

  atualizarRanking();
}

function atualizarRanking() {
  const ranking = document.getElementById("ranking");

  // ordena do maior para o menor
  usuarios.sort((a, b) => b.pontos - a.pontos);

  ranking.innerHTML = "";

  usuarios.forEach((user, index) => {
    const li = document.createElement("li");

    let medalha = "";
    if (index === 0) medalha = "🥇 ";
    else if (index === 1) medalha = "🥈 ";
    else if (index === 2) medalha = "🥉 ";

    // destaca o usuário atual
    if (user.nome === usuarioAtual) {
      li.innerHTML = `<strong>${medalha}${user.nome}: ${user.pontos} pontos</strong>`;
    } else {
      li.textContent = `${medalha}${user.nome}: ${user.pontos} pontos`;
    }

    ranking.appendChild(li);
  });
}

// carrega ranking ao abrir
atualizarRanking();
