alert("TEST");
// SETUP VARIABLES
//==========================================================

var apiKey = "AIzaSyB1iL9inW_ZS71ILZyjrpM2w9vSbX0fL2s";
// var numVideos= 6;
var queryTerm = "";
var queryURLBase = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=" + apiKey;
var Finalsearch = "https://www.youtube.com/watch?v=";
var YouTubeSearch = "tutorial";
var i = 0;

// FUNCTIONS
//==========================================================

$(document).ready(function() {



function runQuery(numVideos, queryURL) {
    // AJAX Function
    $.ajax({ url: queryURL, method: "GET" })
        .done(function (YoutubeData) {

            for (var i = 0; i < 5; i++) {
                console.log("====================================================");
                console.log("VIDEO ID");
                console.log(YoutubeData.items[i].id.videoId);
                console.log("====================================================");
                console.log("TITLE");
                console.log(YoutubeData.items[i].snippet.title);
                console.log("====================================================");
                console.log("DESCRIPTION");
                console.log(YoutubeData.items[i].snippet.description);
                console.log("====================================================");
                console.log("WORKING URL");
                console.log(Finalsearch + YoutubeData.items[i].id.videoId);
                console.log("====================================================");

                //Start Dumping to HTML Here
                var wellSection = $('<div>');
                wellSection.addClass("well");
                wellSection.attr('id', 'videoWell-' + i);
                $('#wellSection').append(wellSection);

                //Attach the content to the appropriate well
                $("#videoWell-" + i).append("<a href="+Finalsearch+YoutubeData.items[i].id.videoId+">"+YoutubeData.items[i].snippet.title+"</a>");
              //  $("#videoWell-" + i).append("<h1>"+ YoutubeData.items[i].snippet.title +"</h1>");
                $("#videoWell-" + i).append("<h1>"+ YoutubeData.items[i].snippet.description +"</h1>");
            }


         

        })

    }

    // }
    // MAIN PROCESSES
    //==========================================================

    $('#searchBtn').on('click', function (event) {
        event.preventDefault();

        // Get search term
        var queryTerm = $('#search').val().trim();
        console.log(queryTerm)

        // Add in the Search Term
        var newURL = queryURLBase + "&q=" + encodeURIComponent(queryTerm) + "+" + YouTubeSearch;
        console.log(newURL);

        //Send the AJAX call the newly assembled URL

        runQuery(3, newURL);

        return false;
    })

})

// 1. Retrieve user inputs and convert to variables
// 2. Use variable to run an AJAX call to YouTube
// 3. Break down the YouTube API useable fields
// 4. Dynamically generate html content
// 5. Dealing with "edge cases" -- buds or situations that are not intuitive