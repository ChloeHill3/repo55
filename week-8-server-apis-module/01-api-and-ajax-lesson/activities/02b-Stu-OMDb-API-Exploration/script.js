var apiURL = "http://www.omdbapi.com/?";
var parameters = "&apikey=trilogy&t=batman";
var queryURL = apiURL + parameters;


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (result) {
            console.log(result)
        });