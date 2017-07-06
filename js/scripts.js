$(document).ready(function() {

  $("form").submit(function(event) {

    var gender = $('input:radio[name=gender]:checked').val();
    var color = $('input:radio[name=color]:checked').val();
    console.info(gender);
    console.info(color);

    if (gender != null && color != null) {
      var name = null;
      if (gender == "male" && color == "red") {
        name = "Ron"
      } else if (gender == "male" && color == "green") {
        name = "Draco"
      } else if (gender == "male" && color == "blue") {
        name = "Garrick"
      } else if (gender == "male" && color == "yellow") {
        name = "Cedric"
      } else if (gender == "female" && color == "red") {
        name = "Hermione"
      } else if (gender == "female" && color == "green") {
        name = "Bellatrix"
      } else if (gender == "female" && color == "blue") {
        name = "Luna"
      } else if (gender == "female" && color == "yellow") {
        name = "Pomona"
      }
      console.info(name);
      $("#outputName").text("You are " + name);
    }

    event.preventDefault();

  });
});
