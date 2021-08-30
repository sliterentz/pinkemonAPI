const axios = require("axios");
require('dotenv').config();

const pokemonList = async (req, res) => {
    const listLimit = req.query.limit || 0;
    const offsetLimit = req.query.offset || 0;

    const params = { limit: listLimit, offset: offsetLimit };

    if(listLimit > 0 && offsetLimit > 0) {
        
        const pokeData = await axios.get(process.env.POKEMON_API+'/pokemon', {
            params,
            headers: {
                "Content-type": "application/json"
            },
        }).catch((e) => {
            return res.status(401).send({
                Message: e.message,
                Code: '41',
                Data: []
            });
        });
        
        if(!pokeData) {
            return res.status(400).send({
                Message: 'Pokemon API Data Fetch Fail',
                Code: '40',
                Data: []
            });
        }

        const prevUrlSearchParams = new URLSearchParams(pokeData.data.previous);
        const prevParams = Object.fromEntries(prevUrlSearchParams.entries());

        const nextUrlSearchParams = new URLSearchParams(pokeData.data.next);
        const nextParams = Object.fromEntries(nextUrlSearchParams.entries());

        const FixPrevURL = 'http://192.168.1.3:3080/pinkemon/list?offset=100&limit=100';
        const FixNextURL = 'http://192.168.1.3:3080/pinkemon/list?offset=300&limit=100';

        const FormatedNextURL = FixNextURL;
        const FormatedPreviousURL = FixPrevURL;

        console.log();

        return res.status(200).send({
            Message: 'List Pokemon Found',
            Code: '20',
            Data: pokeData.data.results,
            Next: FormatedNextURL,
            Previous: FormatedPreviousURL,
            Total: pokeData.data.count
        });
    
    } else {
        return res.status(404).send({
            Message: 'Invalid Limit Set',
            Code: '44',
            Data: []
        })
    }
};

const pokemonDetail = async (req, res) => {
    const pokeName = req.query.name;

        const pokeData = await axios.get(process.env.POKEMON_API+`/pokemon/`+pokeName, {
            headers: {
                "Content-type": "application/json"
            },
        }).catch((e) => {
            return res.status(401).send({
                Message: e.message,
                Code: '41',
                Data: []
            });
        });

        if (!pokeData) { 
            return res.status(404).send({
                Message: 'Invalid Pokemon Name',
                Code: '44',
                Data: []
            });
        }

        return res.status(200).send({
            Message: 'Pokemon Found',
            Code: '20',
            Data: pokeData.data
        });

};

const PokeController = {
    pokemonList,
    pokemonDetail,
  }
  
module.exports = PokeController;
  