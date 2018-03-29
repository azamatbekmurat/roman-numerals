
var outputRoman="";

function single(remainder) {
  if (remainder===1) {
    outputRoman= outputRoman + "I";
  } else if (remainder===2) {
    outputRoman= outputRoman + "II";
  } else if (remainder===3) {
    outputRoman= outputRoman + "III";
  } else if (remainder===4) {
    outputRoman= outputRoman + "IV";
  } else if (remainder===5) {
    outputRoman= outputRoman + "V";
  } else if (remainder===6) {
    outputRoman= outputRoman + "VI";
  } else if (remainder===7) {
    outputRoman= outputRoman + "VII";
  } else if (remainder===8) {
    outputRoman= outputRoman + "VIII";
  } else if (remainder===9) {
    outputRoman= outputRoman + "IX";
  }
}

function forTens(tens) {
  if (tens===1) {
    outputRoman= outputRoman + "X";
  } else if (tens===2) {
    outputRoman= outputRoman + "XX";
  } else if (tens===3) {
    outputRoman= outputRoman + "XXX";
  } else if (tens===4) {
    outputRoman= outputRoman + "XL";
  } else if (tens===5) {
    outputRoman= outputRoman + "L";
  } else if (tens===6) {
    outputRoman= outputRoman + "LX";
  } else if (tens===7) {
    outputRoman= outputRoman + "LXX";
  } else if (tens===8) {
    outputRoman= outputRoman + "LXXX";
  } else if (tens===9) {
    outputRoman= outputRoman + "XC";
  }
}

function forHundreds(hundreds) {
  if (hundreds===1) {
    outputRoman= outputRoman + "C";
  } else if (hundreds===2) {
    outputRoman= outputRoman + "CC";
  } else if (hundreds===3) {
    outputRoman= outputRoman + "CCC";
  } else if (hundreds===4) {
    outputRoman= outputRoman + "CD";
  } else if (hundreds===5) {
    outputRoman= outputRoman + "D";
  } else if (hundreds===6) {
    outputRoman= outputRoman + "DC";
  } else if (hundreds===7) {
    outputRoman= outputRoman + "DCC";
  } else if (hundreds===8) {
    outputRoman= outputRoman + "DCCC";
  } else if (hundreds===9) {
    outputRoman= outputRoman + "CM";
  }
}

function forThousands(thousands) {
  if (thousands===1) {
    outputRoman= outputRoman + "M";
  } else if (thousands===2) {
    outputRoman= outputRoman + "MM";
  } else if (thousands===3) {
    outputRoman= outputRoman + "MMM";
  }
}

$(document).ready(function() {
  $("form#roman").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("#number").val());

    if (Number.isInteger(inputNumber)) {
      if (inputNumber > 0 && inputNumber < 4000) {
        var thousands=parseInt(inputNumber/1000);
        forThousands(thousands);

        inputNumber= inputNumber%1000;

        var hundreds=parseInt(inputNumber/100);
        forHundreds(hundreds);

        inputNumber= inputNumber%100;

        var tens=parseInt(inputNumber/10);
        forTens(tens);

        var remainder = inputNumber%10;
        single(remainder);

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
