// Lista de amigos (estado en memoria)
let amigos = [];

// Referencias al DOM
const input = document.getElementById("amigo");
const lista = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// Renderiza la lista visible en <ul id="listaAmigos">
function renderLista() {
  lista.innerHTML = "";

  amigos.forEach((nombre, index) => {
    const li = document.createElement("li");
    li.textContent = nombre;

    // Botón "X" para eliminar (opcional, no requerido por el enunciado, pero útil)
    const btnDel = document.createElement("button");
    btnDel.textContent = "×";
    btnDel.className = "btn-remove";
    btnDel.setAttribute("aria-label", `Eliminar ${nombre}`);
    btnDel.onclick = () => {
      amigos.splice(index, 1);
      renderLista();
      // Limpia el resultado si cambia la lista para evitar confusiones
      resultado.innerHTML = "";
      input.focus();
    };

    li.appendChild(btnDel);
    lista.appendChild(li);
  });
}

// Agrega un nombre desde el input
function agregarAmigo() {
  const nombre = (input.value || "").trim();

  // Validación de entrada vacía
  if (!nombre) {
    alert("Por favor ingresa un nombre válido.");
    input.focus();
    return;
  }

  // Evitar duplicados (sin distinguir mayúsculas/minúsculas)
  const existe = amigos.some(n => n.toLowerCase() === nombre.toLowerCase());
  if (existe) {
    alert(`"${nombre}" ya está en la lista.`);
    input.select();
    return;
  }

  amigos.push(nombre);
  input.value = "";
  renderLista();
  input.focus();
}

// Realiza el sorteo aleatorio y muestra el ganador
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Agrega al menos un nombre antes de sortear.");
    input.focus();
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const ganador = amigos[indice];

  // Mostrar el resultado en <ul id="resultado">
  resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${ganador}</strong></li>`;
}

// Permitir Enter para agregar rápido
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") agregarAmigo();
});

// Exponer funciones globales para los botones con onclick del HTML
window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;

// Render inicial
renderLista();
