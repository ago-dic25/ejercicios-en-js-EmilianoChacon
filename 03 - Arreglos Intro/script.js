const alumnos = [
  "Carlos Manuel",
  "Jose Perez",
  "Mariana Rodriguez",
  "Contreras Martinez",
  "Diego Angel",
  "Diego Emiliano",
  "Carlos Leal",
  "Mariana Martinez",
  "Emiliano Chacon"
];

const lista = document.getElementById("ListaAlumnos");
const filtro = document.getElementById("filtroAlumno");

function mostrarLista(data) {
  lista.innerHTML = "";
  data.forEach((nombre, i) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    li.style.animationDelay = `${i * 0.05}s`; // efecto escalonado
    lista.appendChild(li);
  });
}

mostrarLista(alumnos);

filtro.addEventListener("input", () => {
  const texto = filtro.value.toLowerCase();
  const items = lista.querySelectorAll("li");

  items.forEach(li => {
    const nombre = li.textContent.toLowerCase();
    if (nombre.includes(texto)) {
      li.classList.remove("hide");
    } else {
      li.classList.add("hide");
    }
  });

  if (texto === "") {
    items.forEach(li => li.classList.remove("hide"));
  }
});