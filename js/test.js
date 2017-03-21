/**
 * Created by juancarlosnavarrete on 3/20/17.
 */


function callNetflix(title) {
    /***
     * Function is call if no title is not found in the theater
     * @param string
     */
    console.log(title);
    var baseURL = "http://netflixroulette.net/api/api.php?title=";
    var myTitle = prepareTitle(title);
    console.log(myTitle);
    var queryURL = baseURL + myTitle;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response){
        console.log(response);
    })
}

function prepareTitle(title) {
    var replaced = title.replace(/ /g, '%20');
    return replaced;
}

callNetflix('hello world');