# Express básico

Para iniciar proyecto de node + npm:

```bash
npm init -y
```

Esto me creará un `package.json` con los datos del proyecto. Este archivo sirve para varias cosas, pero principalmente encontraremos las dependencias del proyecto.

Para instalar dependencias en un proyecto de `nodejs` y `npm` hacemos:
```bash
npm install express
npm i express # version cortita
```

Es buena practica y recomendable meter `node_modules` en nuestro `.gitignore` para evitar subir las dependencias.

Para arrancar el servidor, lanzo `node server.js`