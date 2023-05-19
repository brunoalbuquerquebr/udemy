const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/:nome/:lang", (req, res) => {
  const nome = req.params.nome;
  const lang = req.params.lang;
  const exibirMsg = false;

  const produtos = [
    { nome: "Doritos", preco: 3.14 },
    { nome: "Coca-cola", preco: 5 },
    { nome: "Maça", preco: 1.45 },
  ];
  res.render("index", {
    nome: nome,
    lang: lang,
    empresa: "TW",
    inscritos: 3000,
    msg: exibirMsg,
    produtos: produtos,
  });
  //   res.render("principal/perfil");
});

app.listen(8080, () => {
  console.log("App rodando!");
});
