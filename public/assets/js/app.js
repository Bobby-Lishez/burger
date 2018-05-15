$(function() {
    //DOM selectors
    var $newBurger = $("#new-burger");
    var $go = $("#go");
    var $devour = $(".devour");

    //event listener to add a burger
    $go.click(function(event) {
        event.preventDefault();
        var newBurger = {
           name: $newBurger.val().trim(),
        }
        $.ajax("/api/burgers", {
            type: "POST", 
            data: newBurger
        }).then(function(){
            console.log("made a burger");
            location.reload();
        });
    });

    //event listener to devour a burger
    $devour.click(function(event){
        var id = $(this).data("id");
        var devoured = {
            devoured: true
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devoured
        }).then(function(){
            console.log("devoured a burger");
            location.reload();
        });
    });


});