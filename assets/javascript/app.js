
var gmovieTitle = '';
var zipcode = 0;
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDkhL19QkZA9WzWiXXJO7RXuQCYnw3XhBk",
    authDomain: "popcornnow-89d40.firebaseapp.com",
    databaseURL: "https://popcornnow-89d40.firebaseio.com",
    storageBucket: "popcornnow-89d40.appspot.com",
    messagingSenderId: "431519072093"
  };
  firebase.initializeApp(config);

//start here!

//Start Google Maps API
initialize();

$("#altLogin").hide();
var database = firebase.database();

// Initial Values
var name = "";
var genre = "";
//MovieDB apiKey
var apiKey = "6facc36cd18e7e475a81d253d77e92a1";

// Capture Button Click
$("#submit").on("click", function(event) {
  event.preventDefault();

  // Grabbed values from text boxes
  name = $("#name").val().trim();
  genre = $('select[name=selector]').val();
  zipCode = $("#zipCode").val().trim();
  console.log(genre + "genre")
  // Code for handling the push
  database.ref().push({
    name: name,
    genre: genre,
    zipCode: zipCode,
  });
   $("#name").val('');
   $(".genre").val('');
   $("#zipCode").val('');
   $(".intro-header").slideUp(2000);
   console.log('This is my movieTitle ' + movieTitle);
   // console.log(typeof movieTitle);
   displayMovieInfo(genre);

   callTheater(zipCode);

});
//Capture Button Click -
$("#lookUp").on("click", function() {
	$("#mainLogin").fadeOut(1000);
	$("#altLogin").show();
})

//function to retrieve data from Firebase
$("#altSubmit").on("click", function(event) {
	event.preventDefault();
	var altName = $("#findName").val().trim();
	database.ref().on("value", function(snapshot) {
	var sv = snapshot.val();

    console.log(sv);

    for (var key in sv) {
    	var objName = sv[key].name;
    	var objGenre = sv[key].genre;
    	var objZipCode = sv[key].zipCode;
    	if(objName == altName) {
    		console.log("Works");
    		displayMovieInfo(objGenre);
    		callTheater(objZipCode);
    	}
    }
	});
	$(".intro-header").slideUp(2000);
});



//MOVIE DB API call to retrieve specific data, and place it to HTML.
function displayMovieInfo(x) {
	console.log(x)
	var queryURL = "https://api.themoviedb.org/3/genre/" + x + "/movies?api_key=" + apiKey + "&language=en-US&include_adult=false&sort_by=created_at.asc";

	// Creating an AJAX call for the specific movie genre
	$.ajax({
	  url: queryURL,
	  method: "GET"
	}).done(function(response) {
	  console.log(response);
	  var moviePoster = response.results[0].poster_path;
	  var movieTitle = response.results[0].original_title;
	  gmovieTitle = movieTitle;
	  var overview = response.results[0].overview;
	  $("#poster").attr("src", "https://image.tmdb.org/t/p/w500/" + moviePoster);
	  $("#movieTitle").html(movieTitle);
	  $("#movieSynopsis").html(overview);
	  console.log('my gmovie: ', gmovieTitle);


})
}




function TimeFormat(str){
    /***
     * Removes the calendar date from the time stamp and return time HH:mm
     * @type {Array}
     */
    var arr = str.split("T");
    return arr[1];
}

function displayTheater(obj) {
    /***
     * Function display cast, theater name, and showtime on index.html
     */

    //Theater
    $("#buyTickets").attr("href", obj.link);
    //showtime
    $("#showtime0").html(TimeFormat(obj.showtime[0].dateTime));
    $("#showtime1").html(TimeFormat(obj.showtime[1].dateTime));
    $("#showtime2").html(TimeFormat(obj.showtime[2].dateTime));
    //theater name
    $("#theaterName").html(obj.theater);
    //cast
    $("#cast0").html(obj.cast[0]);
    $("#cast1").html(obj.cast[1]);
    $("#cast2").html(obj.cast[2]);
}

function callTheater(zipCode){
    /***
     * Function calls the Theater API and retrieves a JSON object
     * @param int a zipcode that will display theater according to proximity.
     */

    var apikey = "nxpbe8qerd6deydtfsh2sard";
    var baseUrl = "http://data.tmsapi.com/v1.1";
    var showtimesUrl = baseUrl + '/movies/showings';
    //var zipCode = "90302";
    var d = new Date();
    var today = d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate();
    // send off the query
    $.ajax({
        url: showtimesUrl,
        data: {
            startDate: today,
            zip: zipCode,
            jsonp: "dataHandler",
            api_key: apikey
        },
        dataType: "jsonp",
    });
}

function dataHandler(data) {
    /***
     * Function receives an array of JSON objects and filters objects by specific movie Title
     * @type {Array}
     */
    var myObj = _.map(data, function (item) {
        return{
            title: item.title,
            cast: item.topCast,
            theater: item.showtimes[0].theatre.name,
            showtime: item.showtimes,
            link: item.showtimes[0].ticketURI
        }
    })
    var flag = false;
    //Traverse an array
    for(var i=0; i < myObj.length;i++){
        // 'Logan' is a place holder we need to verify
        if(gmovieTitle === myObj[i].title){
            console.log('found the movie title', myObj[i]);
            // need to create a method that will display myObj[i] in html
            displayTheater(myObj[i]);
            flag = true;
            break;
        }
        //console.log('Did not find your movie');
    }
    if(flag){
    	console.log('we found your movie');
    }else{
    	console.log('did not find your movie');
    }

}

$("#codeAddress").click(function(){
    codeAddress();
})