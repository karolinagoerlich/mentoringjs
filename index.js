const fetch = require("node-fetch")


function fetchPikachu() {
    return fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
}

function init() {
    const result = fetchPikachu()
    result
        .then((result) => result.json())
        .then((pikachu) => {
            const name = pikachu.name
            const sprite = pikachu.sprites["front_default"]

            return {
                name,
                sprite
            }
        })
}

init()