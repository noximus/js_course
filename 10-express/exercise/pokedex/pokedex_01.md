# Pokedex

We've been contracted by Professor Elm to build an online version of the Pokedex, the palm pilot looking thing that has all of the information about every Pokemon in it.

Our web application should have a home page that lists every pokemon in order. Each pokemon should be a link to a page that shows all the details about that pokemon.

Our application will need a server running express, at least 2 views and 1 layout using handlebars and probably 2+ routes.

## Steps:

1. Get a server running on localhost:3000.
2. Set up express to use handlebars, build a layout and a index/home page
3. Build an index route that renders a list of every pokemon
4. Edit your index page to show every pokemon in a list, linking to an individual page for each pokemon
5. Build out a route to render the page for a single pokemon using params
6. Build a template for an individual pokemon

By this point you should be able to navigate to the root/index of your application and see a list of all pokemon in the pokedex, each linking to the individual page for each pokemon. When you click on a link to a specific pokemon, you should be able to see a page showing data for that specific pokemon.

## Bonus
1. Instead of using the ID in the route for an individual pokemon, how might we get a pokemon by it's name? I.e. `localhost:3000/bulbasaur`
2. Build out a route that groups pokemon by their types, i.e. `localhost:3000/grass` lists all pokemon of the `grass` type.


console.log
