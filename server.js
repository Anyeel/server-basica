const express = require("express")

const app = express()

const listaAdejtivos = ["brillante", "curioso", "temerario", "misterioso", "singular", "elegante", "rápido", "sincero", "audaz", "luminoso"]
const listaNombres = ["Alejandro", "Beatriz", "Carlos", "Diana", "Elena", "Fernando", "Gabriela", "Hugo", "Isabel", "Javier"]
const artistasRegueton = ["Daddy Yankee", "Bad Bunny", "Maluma", "Karol G", "Ozuna", "Anuel AA", "Don Omar", "Nicky Jam", "Wisin & Yandel","Cris Mj"]
const generosDeCanciones = ["Reguetón", "Pop", "Rock", "Hip-hop", "Jazz", "Clásica", "Salsa", "Electronica", "Blues", "Country"]
const nombresCanciones = ["Despacito", "Shape of You", "Blinding Lights", "Bohemian Rhapsody", "Billie Jean", "Rolling in the Deep", "Someone Like You", "Uptown Funk", "Happy", "Hey Jude"]



const users = []
for (let i = 0; i < 10; i++){
    const numeroAleatorio = Math.floor(Math.random() * 9999)
    const nombreUsuario = randomFromArray(listaAdejtivos) + randomFromArray(listaNombres) + numeroAleatorio
    const email = nombreUsuario + "@gmail.com"
    const contraseña = randomFromArray(listaAdejtivos) + randomFromArray(listaNombres) + numeroAleatorio
    const estado = randomFromArray(["activo", "inactivo"])
    const objeto = {nombreUsuario, email, contraseña, estado}
    users.push(objeto)
}

const canciones = []
for (let i = 0; i < 10; i++){
    const numeroAleatorio = Math.floor(Math.random() * 999 + 45)
    const artista = randomFromArray(artistasRegueton) 
    const duracion = numeroAleatorio + " " + "segundos"
    const nombreCancion = randomFromArray(nombresCanciones)
    const genero = randomFromArray(generosDeCanciones)
    const objeto = {nombreCancion, artista, genero, duracion}
    canciones.push(objeto)
}

/*
app.get("/",(req, res) =>{
    console.log("Hola mundo") //esto se ejecuta en el servidor
    res.send("Hola mundo") //esto se devuelve al cliente
})*/

app.use(express.static("public"))

app.get("/users",(req, res) =>{
    res.json(users)
})

app.get("/canciones",(req, res) =>{
    res.json(canciones)
})

app.get("/users/:id",(req, res) =>{
    const id = req.params.id
    if (id )
    console.log(id)
    res.json(users[id])
})

function randomFromArray(array){
    return array[Math.floor(Math.random() * array.length)]
}

app.listen(3000, () => {
    console.log("El servidor está funcionando en el puerto 3000")
})