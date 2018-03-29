var outputRoman=[];

var romanNumerals = ["I","V","X","L","C","D","M"];
var decimals = [1,5,10,50,100,500,1000];

function romans(number) {
  if (number>0&&number<4) {
    for (var i=0; i < number; i++) {
      outputRoman+= romanNumerals[0];
    }
  }
}


$(document).ready(function() {
  $("form#roman").submit(function(event) {
    // outputRoman = "";
    event.preventDefault();

    var inputNumber = parseInt($("#number").val());
    console.log(inputNumber);

    if (Number.isInteger(inputNumber)) {
      if (inputNumber > 0 && inputNumber < 4000) {
        romans(inputNumber);
        console.log(outputRoman);
        $(".output").text(outputRoman);
        $("#result").show();

      } else {
        $(".output").text("Your input should be between 1-3999");
        $("#result2").show();
      }
    } else {
      $(".output").text("Input is not a number");
      $("#result2").show();
    }

  })
})
