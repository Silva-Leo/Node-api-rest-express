const express = require('express') //*importou o framework express

const consign = require('consign') //* importou o consign

//const bodyParser = require('body-parser') //* importou o body-parser

module.exports = () => {

    const app = express() //* criou um app com as funções executadas do express

    app.use(express.urlencoded())
    //app.use(bodyParser.urlencoded({extended: true})) //* Aqui estamos dizendo para o express usar o bodyparses para converter os dados da requisição
    //**O body-Parser caiu em desuso, o próprio Express implementou esse middlewares */
    // app.use(body-parser.json())
    app.use(express.json())

    consign()
        .include('controllers')
        .into(app)                         //* chamou o consign e incluiu o controllers no app
    return app
}
