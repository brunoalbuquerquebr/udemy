const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Entrou no site!");
});

app.get("/blog/:artigo?", (req, res) => {
  const artigo = req.params.artigo;

  if (artigo) {
    res.send(`<h2>Artigo: ${artigo}</h2>`);
  } else {
    res.send("Blog!");
  }
});

app.get("/canal/youtube", (req, res) => {
  const canal = req.query["canal"];
  res.send(canal);
});

app.get("/ola/:nome/:empresa", (req, res) => {
  const nome = req.params.nome;
  const empresa = req.params.empresa;
  res.send(`<h1>Bem-vindo, ${nome} - ${empresa}!!!</h1>`);
});

app.listen(4000, function (erro) {
  if (erro) {
    console.log("Deu ruim!");
  } else {
    console.log("Servidor Iniciado!");
  }
});
