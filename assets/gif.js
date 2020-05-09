var topics = ["mountain", "moon", "monster"]

//Makin' Button & Postin' Button
let buttonMakerFxn = function() {
    for (let i = 0; i < topics.length; i++) {
        buttonMaker =
            $('<button>' + topics[i] + '</button>').attr('data-name', topics[i]).attr('class', topics[i]);
        buttonMaker.appendTo("#buttonZone");
    } 
};

$(document).ready(buttonMakerFxn);


//search bar button maker
$('#submit').on("click", function() {
    console.log("submit button works")
    topics.push($("#searchBar").val())
    $("#searchBar").val("");
    console.log(topics);
   $("#buttonZone").empty();
    buttonMakerFxn()
});

$("#buttonZone".children).on("click", function() {
    console.log("clicked button");
    // console.log($(this).attr('data-name'));
    // searchWord = $(this).attr('data-name');
    // console.log(searchWord)
    // $("#searchResultsHTML").empty();
});
//click the button and initiate the search of the word
let newImage;
let searchWord;
//make function that handles the click function for buttons
// let grabWord = () => {
//     console.log($(this).attr('data-name'));
//     searchWord = $(this).attr('data-name');
//     console.log(searchWord)
//     $("#searchResultsHTML").empty();
    // return searchWord;


//make function that query's API

let gettingImages = () => {
    let api_key = '&api_key=nQfFTQdcuEY4gT3kQ5tX7ORFubjTOi4z'
    let resultLimit = '&limit=10'
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q='
    queryURL = queryURL + searchWord + api_key + resultLimit;
    console.log(queryURL)
    $.ajax({
            url: queryURL,
            method: "GET",
        })
        .then(function(response) {
            console.log(response)
            for (let i = 0; i < response.data.length; i++) {
                var giphyURL = response.data[i].images.fixed_height_still.url
                newImage = $('<img>')
                newImage.attr("src", giphyURL).attr("id", response.data[i].id);
                $("#searchResultsHTML").append(newImage);

            }
        }); return queryURL;
};


//$('<img/>').click.attr("src", this + '.images.fixed_height.url');
//     title: 'Delete ' + fotos[f].Title
// }).addClass("icon_delete").appendTo(galleryidentifier);

// (function() {
//         console.log(this.id);
//if (giphyURL == response.data[i].images.fixed_height_still.url) {
//     giphyURL = giphyURL = response.data[i].images.fixed_height.url
// } else {
//     giphyURL = response.data[i].images.fixed_height_still.url
// }
// }).attr({
//     src: '/images/delete.gif',
//     title: 'Delete ' + fotos[f].Title
// }).addClass("icon_delete").appendTo(galleryidentifier);