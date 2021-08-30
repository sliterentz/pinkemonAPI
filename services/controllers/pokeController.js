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
        const prevLimitParams = prevUrlSearchParams.get('limit');
        const prevOffsetParams = prevUrlSearchParams.get('https://pokeapi.co/api/v2/pokemon?offset');

        const nextUrlSearchParams = new URLSearchParams(pokeData.data.next);
        const nextLimitParams = nextUrlSearchParams.get('limit');
        const nextOffsetParams = nextUrlSearchParams.get('https://pokeapi.co/api/v2/pokemon?offset');

        const FixPrevURL = process.env.HOST_APP+'/list?offset='+prevOffsetParams+'&limit='+prevLimitParams;
        const FixNextURL = process.env.HOST_APP+'/list?offset='+nextOffsetParams+'&limit='+nextLimitParams;

        return res.status(200).send({
            Message: 'List Pokemon Found',
            Code: '20',
            Data: pokeData.data.results,
            Next: FixNextURL,
            Previous: FixPrevURL,
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
  