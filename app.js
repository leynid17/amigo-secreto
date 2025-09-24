// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let elegidos = [];

function clean() {
  amigos = [];
  elegidos = [];
  document.getElementById("resultado").innerHTML = "";
  listaAmigos();
}

function agregarAmigo() {
  let amigoNuevo = document.getElementById("amigo").value;
  if (amigoNuevo === "") {
    alert("Inserta un nombre valido");
  } else if (amigos.includes(amigoNuevo)) {
    alert("Ese nombre ya está en la lista");
  } else {
    amigos.push(amigoNuevo);
    document.querySelector("#amigo").value = "";
  }
  listaAmigos();
}

function listaAmigos() {
  let lista = document.querySelector("#listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    let amigoHTM = document.createElement("li");
    amigoHTM.innerHTML = amigos[i];
    lista.appendChild(amigoHTM);
  }
}

function sortearAmigo() {
  // Validar mínimo 2 amigos
  if (amigos.length < 2) {
    alert("Necesitas al menos 2 amigos para sortear");
    return;
  }

  // Sorteo
  let indice = Math.floor(Math.random() * amigos.length);

  // alerta que todos fueron sorteados
  if (elegidos.length == amigos.length) {
    alert("Ya no hay más amigos para sortear");
    clean();
    return;
  }

  if (elegidos.includes(amigos[indice])) {
    return sortearAmigo();
  } else {
    document.getElementById("resultado").innerHTML =
      "Tu amigo secreto es: " + amigos[indice];
    elegidos.push(amigos[indice]);
    return "Tu amigo secreto es: " + amigos[indice];
  }
}
