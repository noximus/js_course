# Tunr

Tunr is the worlds #1 music web app. Those Spotify haters can't keep up with us!

## Deliverables
In order to be considered complete, you must make a pull request on this repository with the following:
- a `model.md` file that lists every entity in your application and all properties of that entity
- a `plan.md` file that shows the steps you followed in creating this application
- a working application that meets all the technical requirements listed below

## Technical Requirements

Your application Should meet the following Requirements:

Your application should:
  * have a home page where users can see a list of all artists
  * have a consistent footer across all pages in your application
  * have a consistent header and navigation across all pages in your application
  * use a stylesheet to apply at least some consistent styling to your application (feel free to use bootstrap)
  * have the following functionality for Artists and Songs:

For Artists, a user should be able to:
  * view a list of all artists on the home page
    * this list should show the artist or band name with an image
  * view detailed information on a specific artist
  * add a new artist
  * edit an existing artist

For Songs, a user should be able to:
  * view a list of all songs
  * view detailed information on a specific song
  * edit an existing song

Spotify API:
  * When adding a new artist, query for that artist from the [Spotify API](https://developer.spotify.com/web-api/)
    * to find an artist, use the [search api](https://developer.spotify.com/web-api/search-item/)
    * Add the name, image urls, id (as spotifyId) and genres to your database

## Bonus
The following are all optional bonus activities:
* full CRUD
  * add the ability to delete artists and songs from your database
* spruce up the styling a bit
* look up a `partial` in handlebars and implement at least one
  * an artist item partial or a song item partial, perhaps?
* associate Artists with Songs
  * the artist page should list all songs by the artist
  * when adding a new song, associate it to an artist
