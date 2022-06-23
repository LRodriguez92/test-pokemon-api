const Pokemon = require("../models/Pokemon")

Pokemon.deleteMany({}).then(() => {
    Pokemon.create([
        {
            name: "Pikachu",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnintendoeverything.com%2Fwp-content%2Fuploads%2Fpikachu-1.jpg&f=1&nofb=1",
            pokemonType: "Electric"
        },
        {
            name: "MewTwo",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg00.deviantart.net%2F4a5d%2Fi%2F2016%2F290%2F4%2Fa%2Fmewtwo_by_hsvhrt-dalae4g.png&f=1&nofb=1",
            pokemonType: "Psychic"
        },
        {
            name: "Wobbuffet",
            image: "https://www.ssbwiki.com/images/thumb/7/77/Wobbuffet-Origin.png/1200px-Wobbuffet-Origin.png",
            pokemonType: "Psychic"
        }
    ]).then(pokemons => {
      console.log(pokemons);
      process.exit();
    });
  });