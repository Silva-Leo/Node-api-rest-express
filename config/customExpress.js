const express = require('express') //*importou a biblioteca express

const consign = require('consign') //* importou o consign

module.exports = () => {

    const app = express() //* criou um app com as funções executadas do express

    consign()
        .include('controllers')
        .into(app)                         //* chamou o consign e incluiu o controllers no app
    return app
}
