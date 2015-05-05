

//define numbers so that when you click one it appears on screen (variables, get id, click event, console.log result on screen)
// var firstNumber = "";
var inputNumbers = [];
// var secondNumber = "";
var operatorType = "";


var numbers = document.getElementsByClassName("number");
// var foodArray = ['apples', 'cucumber', 'chocolate'];

// //write a fnction that will output "i like " each element in foodArray

// foodArray.forEach(function(foodType) {
//   console.log("i like " + foodType)
// });

// numbers[0].addEventListener('click', function(event) {
//   debugger;
//   // var whichNumber = event.target("number").value;
//   // alert(whichNumber);
// });

// var b = numbers.split(1,5);
for(var i = 0; i < numbers.length; i++){
  numbers[i].addEventListener('click', function(event) {
    console.log(this.value);
  inputNumbers.push(this.value);
  });
};

var firstNumber = inputNumbers[0];
var secondNumber = inputNumbers[1];



var operators = document.getElementsByClassName("operator");

for(var i = 0; i < operators.length; i++){
  operators[i].addEventListener('click', function(event) {
  operatorType=(this.value);
  });
};





//make these variables firstNumber, secondNumber)

//attach +, -, /, * buttons to functions    

//this is my code from first calculator project. different input this time -> not prompt but result of event
    if (basicOperation === "add") {
         {
          alert (firstNumber + secondNumber);
        }
  } else if (basicOperation === "subtract") {
         { 
            alert(firstNumber - secondNumber);
          }
  } else if (basicOperation === "multiply") {
        { 
        alert(firstNumber * secondNumber);
      }
  } else if (basicOperation === "divide") {
         {
        alert(firstNumber / secondNumber);
        }
  }


//make equation that firstNumber (function of +, -, /, *) secondNumber equals result.
//event of clicking equals cues result, which prints to screen

//show result on screen

//clear screen, without refreshing. is refreshing the default?
