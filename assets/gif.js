var topics = ["mountain", "moon", "monster"]


//for some reason it's not uploading to final site


//Makin' Button & Postin' Button
let buttonMakerFxn = function() {
    for (let i = 0; i < topics.length; i++) {
        buttonMaker =
            $('<button>' + topics[i] + '</button>').attr('data-name', topics[i]).attr('class', topics[i]);
        buttonMaker.appendTo("#buttonZone");

    }
}
buttonMakerFxn();

//search bar button maker
$('#submit').on("click", function() {
    console.log("submit button works")
    topics.push($("#searchBar").val())
    $("#searchBar").val("");
    console.log(topics);
    $("#buttonZone").empty();
    buttonMakerFxn()
});

//click the button and initiate the search of the word
let newImage

$("#buttonZone").children().on("click", function() {
    console.log($(this).attr('data-name'));
    let api_key = '&api_key=nQfFTQdcuEY4gT3kQ5tX7ORFubjTOi4z'
    let resultLimit = '&limit=10'
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q='
    let searchWord
    console.log("clicked button")
    $("#searchResultsHTML").empty();
    searchWord = $(this).attr('data-name')
    console.log(searchWord)
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
                newImage.attr("src", giphyURL)
                $("#searchResultsHTML").append(newImage);

            }
        })

    queryURL = ''
});


$(newImage).on("click", function() {
    console.log("Image is clicked");
    //if (giphyURL == response.data[i].images.fixed_height_still.url) {
    //     giphyURL = giphyURL = response.data[i].images.fixed_height.url
    // } else {
    //     giphyURL = response.data[i].images.fixed_height_still.url
    // }
});