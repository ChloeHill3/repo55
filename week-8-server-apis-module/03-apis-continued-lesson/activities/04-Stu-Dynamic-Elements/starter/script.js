$("button").on("click", function () {
  var animal = $(this).attr("data-animal");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    animal + "&api_key=EE3brOpdTInHN8od2syz5PmcXrTVMthw&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      var results = response.data;



      console.log(response);

      // Step 2: since the image information is inside of the data key,
      // make a variable named results and set it equal to response.data

      // ==================

      for (var i = 0; i < results.length; i++)
        // Step 3: uncomment the for loop above and the closing curly bracket below.
        // Make a div with jQuery and store it in a variable named animalDiv 
        var $animalDiv = $("<div>");
      // Make a paragraph tag with jQuery and store it in a variable named p.      
      var $p = $("<p>")
      // Set the inner text of the paragraph to the rating of the image in results[i].
      var rating = results[i].rating;
      var p = $("<p>").text("Rating: " + rating);
      // Make an image tag with jQuery and store it in a variable named animalImage.
      var animalImage = $("<img>");
      // Set the image's src to results[i]'s fixed_height.url.
      animalImage.attr("src", results[i].images.fixed_height.url);
      // Append the p variable to the animalDiv variable.
      $animalDiv.append(p)
      // Append the animalImage variable to the animalDiv variable.
      // Prepend the animalDiv variable to the element with an id of gifs-appear-here.
      $("#gifs-appear-here").prepend($animalDiv);

    })

});
