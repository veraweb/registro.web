const registroForm = document.getElementById("registroForm");
const listaUsuarios = document.getElementById("listaUsuarios");

const usuarios = [];

registroForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden");
    return;
  }

  const nuevoUsuario = {
    nombre,
    email
  };

  usuarios.push(nuevoUsuario);
  mostrarUsuarios();
  registroForm.reset();
});

function mostrarUsuarios() {
  listaUsuarios.innerHTML = "";

  usuarios.forEach((usuario, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${usuario.nombre} - ${usuario.email}`;
    listaUsuarios.appendChild(li);
  });
}
