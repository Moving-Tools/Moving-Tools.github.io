var button = document.getElementById("next");
var formText = document.getElementById("formText");

var circle1 = document.getElementById("circle1");
var circle2 = document.getElementById("circle2");
var circle3 = document.getElementById("circle3");

var currentStepCircle = "fas";
var incompleteStepCircle = "far";
var uncheckedCircle = "fa-circle";
var checkedCircle = "fa-check-circle";

var step = 1;

var circleHTML = document.getElementById("circles");
var circlesDefault = `
<i id="circle1" class="fas fa-circle"></i>

<span id="dash">⎯</span>

<i id="circle2" class="far fa-circle"></i>

<span id="dash">⎯</span>

<i id="circle3" class="far fa-circle"></i>
`;

var step1 = `<label for="origin_state">Current State or Zip:</label>
<input type="text" id="origin_state" name="origin_state" placeholder="CA">

<label for="origin_bill">Total Utilities:</label>
<input type="text" id="origin_bill" name="origin_bill" placeholder="123.45">

<br>
<button onclick="nextStep()" type="button" id="next">Next</button>`;

var step2 = `<label for="destination_state">Destination State or Zip:</label>
<input type="text" id="destination_state" name="destination_state" placeholder="NY">

<label for="square_ft_change">Change in Sq. Ft.:</label>
<input type="text" id="square_ft_change" name="square_ft_change" placeholder="(Optional)">

<br>
<button onclick="nextStep()" type="button" id="next">Next</button>`;

var step3 = `<p>Your estimated utility bill is 222.22<br>
This may or may not be accurate!</p>
<br>
<button onclick="nextStep()" type="button" id="next">Restart</button>`;

function nextStep() {
    if(step == 1){
        step = 2;
        formText.innerHTML = step2;
        formText = document.getElementById("formText");
        console.log(circle1);
        circle1.classList.remove(uncheckedCircle);
        circle1.classList.add(checkedCircle);
        circle2.classList.remove(incompleteStepCircle);
        circle2.classList.add(currentStepCircle);
        return;
    }
    if(step == 2){
        step = 3;
        formText.innerHTML = step3;
        formText = document.getElementById("formText");
        circle2.classList.remove(uncheckedCircle);
        circle2.classList.add(checkedCircle);
        circle3.classList.remove(incompleteStepCircle);
        circle3.classList.add(currentStepCircle);
        return;
    }
    if(step == 3) {
        step = 1;
        formText.innerHTML = step1;
        formText = document.getElementById("formText");
        circleHTML.innerHTML = circlesDefault;
        circle1 = document.getElementById("circle1");
        circle2 = document.getElementById("circle2");
        circle3 = document.getElementById("circle3");
        return;
    }
};
