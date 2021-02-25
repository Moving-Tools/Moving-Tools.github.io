var button = document.getElementById("next");
var formText = document.getElementById("formText");
var menu = document.getElementById("menu");
var toggle = false;

var circle1 = document.getElementById("circle1");
var circle2 = document.getElementById("circle2");
var circle3 = document.getElementById("circle3");

var currentStepCircle = "fas";
var incompleteStepCircle = "far";
var uncheckedCircle = "fa-circle";
var checkedCircle = "fa-check-circle";

var step = 1;

var stepInfo = document.getElementById("step");

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

var origin_state;
var destination_state;
var current_bill;
var estimated_bill;

var step3 = `<p>Your estimated utility bill in ${destination_state} is ${estimated_bill}<br>
This may or may not be accurate!</p>
<br>
<button onclick="nextStep()" type="button" id="next">Restart</button>`;

function nextStep() {
    if(step == 1){
        step = 2;
        origin_state = document.getElementById("origin_state").value;
        current_bill = document.getElementById("origin_bill").value;
        stepInfo.innerHTML = "Step 2: Destination Info";
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
        destination_state = document.getElementById("destination_state").value;
        estimated_bill = current_bill * 2;
        stepInfo.innerHTML = "Your Estimate";
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
        stepInfo.innerHTML = "Step 1: Origin Details";
        circleHTML.innerHTML = circlesDefault;
        circle1 = document.getElementById("circle1");
        circle2 = document.getElementById("circle2");
        circle3 = document.getElementById("circle3");
        return;
    }
};

function dropMenu(){
    if(toggle = false){
        toggle = true;
        menu.style.display = "inline-block";
    }
    else {
        toggle = false;
        menu.style.display = "none";
    }
};

document.getElementById("page").onclick(function(){
    if(toggle){
        toggle = false;
        menu.style.display = "none";
    }
});