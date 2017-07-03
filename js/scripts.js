$(document).ready(function(){
    $("input").change(function(){
        /*
        alert("The text has been changed. "+ $('input:radio[name=gender]:checked').val()
        + " "
        + $('input:radio[name=color]:checked').val()) ;
         */
        var gender = $('input:radio[name=gender]:checked').val();
        var color = $('input:radio[name=color]:checked').val();
          console.info(gender);
          console.info(color);

          if(gender!=null && color!=null){
            var name = null;
              if(gender =="male" && color == "red" ) {
                name = "Ron"
              } else if(gender =="male" && color == "green" ) {
                name= "Draco"
              } else if(gender =="male" && color == "blue") {
                name = "Garrick"
              } else if(gender =="male" && color == "yellow") {
                name= "Cedric"
              } else if(gender =="female" && color == "red") {
                name= "Hermione"
              } else if(gender =="female" && color =="green") {
                name= "Bellatrix"
              } else if(gender =="female" && color =="blue") {
                name="Luna"
              } else if(gender =="female" && color =="yellow") {
                name="Pomona"
              }
           console.info(name);
            $("#outputName").text("You are " + name);
          }



    });
});
/*
var ron = function(red, boy) {

};

var hermione = function(red, girl ) {

};

var draco = function(green, boy) {

};

var bellatrix = function(green, girl) {

};

var garrick = function(blue, boy) {

};

var luna = function(blue, girl) {

};

var cedric = function(yellow, boy) {

};

var pomona = function(yellow, girl) {

};





$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault()
    var color = $ $("select#color").val();
    var gender = $("select#gender").val();
    $("#output").text(result);
  });


});
   var number1 = parseInt($("#input1").val());
   var number2 = parseInt($("#input2").val());
   var operator = $("input:radio[name=operator]:checked").val();
   var result;
   if (operator === "add") {
     result = add(number1, number2);
   } else if (operator === "subtract") {
     result = subtract(number1, number2);
   } else if (operator === "multiply") {
     result = multiply(number1, number2);
   } else if (operator === "divide") {
     result = divide(number1, number2);
   }


   $("form#insurance").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    if (age) {
      var quote = (100 - age) * 3;
      if (gender === 'male' && age < 26) {
        quote += 50;
      }
      if (age < 16) {
        alert( "Sorry! You can't drive yet!")
      }
      $("#rate").empty().append(quote);
      $("#quote").show();
    } else {
      alert('Please enter your age.');
    }

    event.preventDefault();

    */
