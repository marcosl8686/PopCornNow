$(document).ready(function() {
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

var database = firebase.database();

// Initial Values
var name = "";
var genre = "";
var zipCode = 0;

// Capture Button Click
$("#submit").on("click", function(event) {
  event.preventDefault();

  // Grabbed values from text boxes
  name = $("#name").val().trim();
  genre = $("#genre").val().trim();
  zipCode = $("#zipCode").val().trim();

  // Code for handling the push
  database.ref().push({
    name: name,
    genre: genre,
    zipCode: zipCode,
  });
   $("#name").val('');
   $("#genre").val('');
   $("#zipCode").val('');

});















})