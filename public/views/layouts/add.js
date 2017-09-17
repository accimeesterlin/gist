// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // Make a newBook object
  var survey = {
    firstname: $("#firstname").val().trim(),
    lastname: $("#lastname").val().trim(),
    username: $("#username").val().trim(),
    email: $("#email").val().trim(),
    about: $("#about").val().trim(),
    password: $("#password").val().trim(),


  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", survey)
    // On success, run the following code
    .done(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("firstname").val("");
  $("#lastname").val("");
  $("#username").val("");
  $("#email").val("");
  $("#password").val("");
  $("#about").val("");
  
  

});
