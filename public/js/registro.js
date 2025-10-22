const formRegistro = document.forms['registro']
console.log(formRegistro)

formRegistro.addEventListener('submit', (event) => {
    // detengo envio de formulario
    event.preventDefault()

//     1ra parte obtengo datos y creo json para enviar al back

const usuario = formRegistro.usuario.value
const email = formRegistro.email.value
const pass = formRegistro.pass.value

const image = formRegistro.usuario.value+'.jpg'
const type = 0

})