const express = require("express")

const app = express()

const listaAdejtivos = ["brillante", "curioso", "temerario", "misterioso", "singular", "elegante", "rápido", "sincero", "audaz", "luminoso"]
const listaNombres = ["Alejandro", "Beatriz", "Carlos", "Diana", "Elena", "Fernando", "Gabriela", "Hugo", "Isabel", "Javier"]

const users = []

for (let i = 0; i < 500; i++){
    const numeroAleatorio = Math.floor(1000 + Math.random() * 9000)
    const nombreUsuario = randomFromArray(listaAdejtivos) + randomFromArray(listaNombres) + numeroAleatorio
    const email = nombreUsuario + "@gmail.com"
    const contraseña = randomFromArray(listaAdejtivos) + randomFromArray(listaNombres) + numeroAleatorio
    const estado = randomFromArray(["activo", "inactivo"])
    const objeto = {nombreUsuario, email, contraseña, estado}
    users.push(objeto)
}

app.get("/",(req, res) =>{
    console.log("Hola mundo") //esto se ejecuta en el servidor
    res.send("Hola mundo") //esto se devuelve al cliente
})

app.get("/users",(req, res) =>{
    res.json(users)
})

function randomFromArray(array){
    const num = Math.random() * array.length
    const numInt = Math.floor(num)
    return array[numInt]
}

app.listen(3000, () => {
    console.log("El servidor está funcionando en el puerto 3000")
})