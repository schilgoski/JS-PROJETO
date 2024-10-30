import {getCSS, criarGrafico } from "./common.js"

async function redesFavoritasMundo(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json'
    const res = await fetch(url)
    const dados = await res.json()
    const redes = Object.keys(dados)
    cons valores = Object.values(dados)
    const layout = {
        legend: {

        }
    }
    criarGrafico(data, layout)

    // incluirTexto('')
}

redesFavoritasMundo()