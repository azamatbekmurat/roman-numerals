var outputRoman=[];

var romanNumerals = ["M","CM","D","CD","C","XC","L","XL,""X","IX","V","IV","I"];

var decimals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

function romans(number) {
  for (var i=0; i<=number.length; i++) {
    if (number>decimals)
  }

}
  // if (number>0&&number<4) {
  //   for (var i=0; i < number; i++) {
  //     outputRoman+= romanNumerals[0];
  //   }
  // }



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
