const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Dados armazenados em memória (simulando um banco de dados)
let contactData = [];

app.use(cors());
app.use(bodyParser.json()); // Middleware para tratar o corpo das requisições como JSON

// Rota GET principal
app.get("/", (req, res) => {
  res.send("API de Contato está funcionando!");
});

// Rota POST para receber dados do formulário
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Validação dos dados
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  // Criando novo contato
  const newContact = { id: contactData.length + 1, name, email, message };
  contactData.push(newContact);

  // Retorna sucesso
  res.status(201).json({
    message: "Formulário enviado com sucesso!",
    data: newContact,
  });
});

// Rota GET para listar todos os contatos
app.get("/api/contacts", (req, res) => {
  res.json(contactData);
});

// Iniciar servidor na porta especificada
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
