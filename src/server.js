// Constantes para ligar o servidor
const express = require("express")
const server = express()

// Importar o Banco de Dados
const db = require("./database/db")

// Configurar pasta Public
server.use(express.static("public"))

// Habilitar o uso do req.body na aplicação
server.use(express.urlencoded({ extended: true }))

// Utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// Configurar caminhos da minha aplicação
// Página Inicial
// req: Requisição
// res: Resposta
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    // req.query: Query Strings da URL
    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    // req.body: Corpo do nosso formulário
    // Inserir dados no Banco de Dados
    const query = 
    `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if(err) {
            return console.log(err)
        } 

        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", {saved: true})
    }

    db.run(query, values, afterInsertData)
})

server.get("/search", (req, res) => {
    const search = req.query.search

    if(search == "") {
        //Pesquisa vazia
        return res.render("search.html", {total: 0})
    }

    // Importar os dados do Banco de Dados
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
        if(err) {
            console.log(err)
            return res.send("Erro no cadastro!")
        }
        const total = rows.length
    // Carregar a página do HTML com os dados do Banco de Dados
    return res.render("search.html", {places: rows, total})
    })
})

// Ligar o servidor
server.listen(3000)