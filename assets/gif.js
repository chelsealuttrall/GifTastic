var topics = ["mountain", "moon", "monster"]
let searchWord
let api_key = '&api_key=nQfFTQdcuEY4gT3kQ5tX7ORFubjTOi4z'
let resultLimit = '&limit=10'
var queryURL = 'https://api.giphy.com/v1/gifs/search?q='

let buttonMaker

//for some reason it's not uploading to final site


//Makin' Button & Postin' Button

for (let i = 0; i < topics.length; i++) {
    buttonMaker =
        $('<button>' + topics[i] + '</button>').attr('data-name', topics[i]).attr('class', topics[i])
    buttonMaker.appendTo("#buttonZone")

}
//click the button and initiate the search of the word

$("#buttonZone").children().on("click", function() {

    console.log("clicked button")
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
                var giphyURL = response.data[i].images.fixed_height.url
                newImage = $('<img>')
                newImage.attr("src", giphyURL)
                $("#searchResultsHTML").append(newImage);

            }
        });
    //I need some type of query reset, here....may not have time to get to that.

});

//search bar and submit query
$('#submit').on("click", function() {
    console.log("submit click")
    topics.push($("#searchBar").val())
    $('#searchBar').focus()
    console.log(topics)
        //gotta add the extra button and run it.
});

//I ran out of time for all of this. 
//
//3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
//
//4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
//
//5. Under every gif, display its rating (PG, G, so on).
//   * This data is provided by the GIPHY API.
//   * Only once you get images displaying with button presses should you move on to the next step.