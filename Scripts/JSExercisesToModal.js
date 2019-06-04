$(document).ready(function () {
    //SyntaxHighlighter

    //initial hide all SH divs
    $("#divMath, #divFact, #divFizz, #divPal").hide();

    //hide on tab nav away
    $("#tab1, #tab2, #tab3, #tab4").click(function () {
        $("#divMath").hide();
        $("#divFact").hide();
        $("#divFizz").hide();
        $("#divPal").hide();
    });

    //toggle divMath
    $("#btnMathCode").click(function() {
        $("#divMath").toggle();
    });
    //toggle divFact
    $("#btnFactCode").click(function () {
        $("#divFact").toggle();
    });
    //toggle divFizz
    $("#btnFizzCode").click(function () {
        $("#divFizz").toggle();
    });
    //toggle divPal
    $("#btnPalCode").click(function () {
        $("#divPal").toggle();
    });

    // Start Math
    $("#btnMath").click(function () {

        // set no data entries to 0
        var input1 = $("#number1").val();
        var input2 = $("#number2").val();
        var input3 = $("#number3").val();
        var input4 = $("#number4").val();
        var input5 = $("#number5").val();

        if (input1 == "") {
            $("#number1").val("0");
        }
        if (input2 == "") {
            $("#number2").val("0");
        }
        if (input3 == "") {
            $("#number3").val("0");
        }
        if (input4 == "") {
            $("#number4").val("0");
        }
        if (input5 == "") {
            $("#number5").val("0");
        }

        //Step 1: Grab the value inside input id
        var number1 = Number($("#number1").val());
        var number2 = Number($("#number2").val());
        var number3 = Number($("#number3").val());
        var number4 = Number($("#number4").val());
        var number5 = Number($("#number5").val());

        //Step 2: Do something with it (javascript)
        var sum = number1 + number2 + number3 + number4 + number5;
        var product = number1 * number2 * number3 * number4 * number5;
        var mean = sum/5;
        var min = Math.min(number1, number2, number3, number4, number5);
        var max = Math.max(number1, number2, number3, number4, number5);

        //Step 3: Output the results to the screen (jquery)
        $("#sum").text("The sum of the five is " + sum + ".");
        $("#product").text("And the product of everything is " + product + ".");
        $("#mean").text("The average of the five is " + mean + ".");
        $("#min").text("Your smallest number is " + min + ".");
        $("#max").text("Your largest number is " + max + ".");
    });

    $("#btnClear").click(function () {
        $("#sum").text("");
        $("#product").text("");
        $("#mean").text("");
        $("#min").text("");
        $("#max").text("");
        $("#number1, #number2, #number3, #number4, #number5").val("");
    });


    // Start Factorial
    $("#btnClear2").click(function () {
        $("#input6").val("");
        $("#output2").text("");
    });
    $("#btnFact").click(function () {
        var valid = true;
        //step 1- get user data
        var input = Number($("#input6").val());
        
        // validate
        if (input > 171) { 
            alert("Please enter an integer below 171.");
            $("#input6").val("");
            valid = false;
        }
        else if (input == "") {
            $("#input6").val("0");
            input = 0;
        }

        if (valid) {
            //step 2- use it
            var output = Factorial(input);

            //step 3- inform the user
            $("#output2").text("The factorial of " + input + " is " + output + ".");
        
        }
  
    });


    function Factorial(foo) {
        if (foo > 0) {
            for (var loop = foo - 1; loop > 1; loop--) {
                foo *= loop;
            }
        }
        else if (foo == 0) {
            foo = 1;
        }
        else {
            foo = "undefined";
        }
        return foo;
    }


    //Start FizzBuzz
    $("#btnClear3").click(function () {
        $("#input7").val("");
        $("#input8").val("");
        $("#output3").text("");
    });

    // call
    $("#btnFizz").click(function () {
        var valid = true;
        var inZero1 = $("#input7").val();
        var inZero2 = $("#input8").val();
   
        if (inZero1 == "") {
            $("#input7").val("0");
        }
        if (inZero2 == "") {
            $("#input8").val("0");
        }

        var input1 = +($("#input7").val());
        var input2 = +($("#input8").val());
        var output = "";

        if (input1 > 100 || input1 < 0) {
            alert("Please enter an integer between 0 and 100.");
            $("#input7").val("");
            $("#input8").val("");
            valid = false;
        }
        else if (input2 > 100 || input2 < 0) {
            alert("Please enter an integer between 0 and 100.");
            $("#input7").val("");
            $("#input8").val("");
            valid = false;
        }

        if (valid) {
            // use
            for (var i = 1; i <= 100; i++) {
                output += FizzBuzz(input1, input2, i);
            };
            //inform
            output = output.substr(0, output.length - 2);
            $("#output3").html(output + ".");
        }        
    });

    function FizzBuzz(x, y, z) {
        if (z % x == 0 && z % y == 0) {
            return "<span class='fizzbuzz'>FizzBuzz, </span>";
        }
        else if (z % x == 0) {
            return "<span class='fizz'>Fizz, </span>";
        }
        else if (z % y == 0) {
            return "<span class='buzz'>Buzz, </span>";
        }
        else {
            return z + ", ";
        }
    };



    //Start Palindrome
    $("#btnPal").click(function () {
        let reversed = "";
        let nospaces_str = "";
        let nospaces_rev = "";

        //get value
        let str = document.getElementById('input9').value;
        nospaces_str = str.replace(/\s+/g, '').toLowerCase();
        nospaces_rev = Reverse(nospaces_str).toLowerCase();

        //reverse the value
        reversed = Reverse(str);

        //compare values
        if (nospaces_str == nospaces_rev) {
            document.getElementById('IsPalindrome').checked = true;
        }
        else
            document.getElementById('IsPalindrome').checked = false;

        document.getElementById('output4').innerText = reversed;


        function Reverse(str) {
            let reversed = "";
            for (var i = str.length - 1; i >= 0; i--) {
                reversed += str[i];
            }
            return reversed;
        }
    });

    $("#btnClear4").click(function () {
        $("#input9").val("");
        $("#output4").text("");
        $("#IsPalindrome").prop("checked", false);
    });


    //Input validation
    $("#number1, #number2, #number3, #number4, #number5, #input6, #input7, #input8").keypress(function (key) {
        var character = key.which;
        if ((character >= 48 && character <= 57) || (character === 45 && $(this).val() === ""))
            return true;
        else
            return false;
    });
    $("#input9").keypress(function (key) {
        var character = key.which;
        if ((character >= 65 && character <= 90) || (character >= 97 && character <= 122) || character === 32)
            return true;
        else
            return false;
    });
});
