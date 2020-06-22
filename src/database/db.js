// Importar a dependência SQLite 3
const sqlite3 = require("sqlite3").verbose()

// Criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
// Utilizar o objeto de Banco de Dados, para as nossas operações
// db.serialize(() => {
    // Criar uma tabela com comandos SQL
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    // Inserir dados
    // const query = 
    // `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    // `
    
    // const values = [
    //     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    //     "Colectoria",
    //     "Guilherme Gemballa, Jardim América",
    //     "Nº 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Papéis e Papelão"
    // ]

    // function afterInsertData(err) {
    //     if(err) {
    //         return console.log(err)
    //     } 

    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }

    // db.run(query, values, afterInsertData)

    // Deletar dados
    // db.run(`DELETE FROM places WHERE id = ?`, [23], function(err) {
    //     if(err) {
    //         return console.log(err)
    //     } 

    //     console.log("Registro deletado com sucesso!")
    // })

// // Consultar dados
// db.all(`SELECT * FROM places`, function(err, rows){
//     if(err) {
//         return console.log(err)
//     } 

//     console.log("Aqui estão seus registros")
//     console.log(rows)
//     })
// })