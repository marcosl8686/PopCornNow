# PopcornNow
Project 1: APIs

## Live Link 
 - https://marcosl8686.github.io/PopCornNow/

## Description on how to use the app
So you feel like watching a movie, but which movie should you watch and where? No worries, oh indecisive one...PopcornNow is here to help! 

Just enter in your name, your desired genre and your location (via zipcode), and the decision is made for you! PopcornNow will return the highest rated-movie in that genre as well as basic info about that movie: poster, short synopsis, and main actors. The app will also let you know which is the closest movie theater nearby that is showing your movie and show you the theater's location on a map.  You will also see the next showing times, and you're given a link to Fandango to quickly buy those tickets. Done and done!

If the best movie for you isn't in theaters, then you're provided with a link to Amazon.

Now for the best part: PopcornNow remembers you! Just "look up" your name, and the app recalls your preferences and gives you an updated movie recommendation.

Now go enjoy your popcorn and a movie!

## Project Requirements

- Must use at least 2 APIs
- Must use AJAX to pull data
- Must utilize at least one new library or technology that we haven’t discussed
- Must have a polished frontend / UI 
- Must meet good quality coding standards (indentation, scoping, naming)
- Must NOT use alerts, confirms, or prompts (look into modals!)
- Must have some sort of repeating element (table, columns, etc)
- Must use Bootstrap or Alternative CSS Framework
- Must be Deployed (Heroku or Firebase)
- Must have User Input Validation 
- Utilize Firebase for Persistent Data Storage 

## Technologies Used

- HTML, Bootstrap & CSS for the layout (incorporated template)
- Javascript/JQuery to dynamically update HTML based on user input
- APIs used: 
1. The Movie DB (selects movie that is highest rated in genre, used to display title, poster, and synopsis)
2. TMS/ Gracenote (picks nearest theater based on zip code, returns the next three showing times at that theater)
3. OMDB (retrieves cast information)
- Lodash.js used to handle large arrays returned from APIs


## Code Explaination
- Created basic layout of app using template from startbootstrap.com
- Modified template to fit our desired specs and streamline usability with HTML and CSS concepts
- Used JQuery/ On-click event functions to start process of acquiring and displaying data when user submits form
- Went through trial and error process to find functioning APIs that would provide up-to-date movie info to user
- Used AJAX calls to pull desired data from APIs
- Map function in Lodash.js used as method to select necessary info needed from large object return in AJAX query and to return this info in a smaller object
- Linked user data to Firebase database to store user preferences for later convenience to the user

-------------