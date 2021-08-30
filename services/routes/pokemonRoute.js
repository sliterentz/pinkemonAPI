const PokeController = require("../controllers/pokeController");
const express = require("express");
const PokeRouter = express.Router();

PokeRouter.get('/list', async (req, res, next) => {
    PokeController.pokemonList(req, res, next);
  });

PokeRouter.get('/find', async (req, res, next) => {
  PokeController.pokemonDetail(req, res, next);
});

  module.exports = PokeRouter;