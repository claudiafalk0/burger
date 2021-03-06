$(function() {
    $(".change-burger").on("click", function(event) {
      var id = $(this).data("id");
      var eatenBurger = $(this).data("newhaseaten");
  
      var eatenBurgerState = {
        hasEaten: !eatenBurger
      };

      console.log($(this).data("newhaseaten"));
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: eatenBurgerState
      }).then(
        function() {
          console.log("changed burger eaten to", eatenBurger);
          // Reload the page to get the updated list
          location.reload();
          console.log('reload completes')
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim() 
        // hasEaten: $("[name=hasEaten]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  