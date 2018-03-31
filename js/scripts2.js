//business logic

function convertToRoman(number) {
  var outputRoman="";
  var romanNumerals = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  var arabNumerals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

  for (var i=0; i<arabNumerals.length; i++) {
    while ((number%arabNumerals[i]) < number) {
      outputRoman += romanNumerals[i];
      number -= arabNumerals[i];
    }
  }
  return outputRoman;
}

//user interface logic
$(document).ready(function() {
  $("form#roman").submit(function(event) {

    event.preventDefault();

    outputRoman = "";
    var inputNumber = parseInt($("#number").val());

    if (Number.isInteger(inputNumber)) {
      if (inputNumber > 0 && inputNumber < 4000) {
        var converteValue = convertToRoman(inputNumber);

        $("#output1").text(converteValue);
        $("#result2").hide();
        $("#result").show();

      } else {
        $("#output2").text("Your input should be between 1-3999");
        $("#result").hide();
        $("#result2").show();
      }
    } else {
      $("#output2").text("Input is not a number");
      $("#result").hide();
      $("#result2").show();
    }

  })
})
