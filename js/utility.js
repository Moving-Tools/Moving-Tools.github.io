var button = document.getElementById("next");
var formText = document.getElementById("formText");
var menu = document.getElementById("menu");
var main = document.getElementsByTagName("main");
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
<input type="text" id="origin_state" name="origin_state" placeholder="CA" required>

<label for="origin_bill">Total Utilities:</label>
<input type="text" id="origin_bill" name="origin_bill" placeholder="123.45" required>

<label for="origin_sqft">Square Footage:</label>
<input type="text" id="origin_sqft" name="origin_sqft" placeholder="(Optional)">

<br>
<button type="button" value="Next" onclick="nextStep()" id="next">Next</button>`;

var step2 = `<label for="destination_state">Destination State or Zip:</label>
<input type="text" id="destination_state" name="destination_state" placeholder="NY" required>

<label for="square_ft_change">New Square Footage:</label>
<input type="text" id="square_ft_change" name="square_ft_change" placeholder="(Optional)">

<br>
<button type="button" value="Next" onclick="nextStep()" id="next">Next</button>`;

// Stored Variables

let origin_state = 'CA';
let destination_state = 'NY';
let origin_bill = 123.45;
let estimated_bill = 0;

// RegEx matching

let state = /[A-Z][A-Z]/;
let zip = /\d\d\d\d\d/;
let dollar = /^\$?\d+([.,]\d\d)?$/;

function nextStep() {
    var valid = validateForm();
    if(!valid){
        return;
    }
    if(step == 1){
        step = 2;
        stepInfo.innerHTML = "Step 2: Destination Info";
        formText.innerHTML = step2;
        circle1.classList.remove(uncheckedCircle);
        circle1.classList.add(checkedCircle);
        circle2.classList.remove(incompleteStepCircle);
        circle2.classList.add(currentStepCircle);
        return;
    }
    if(step == 2){
        step = 3;
        estimated_bill = origin_bill * 2;
        stepInfo.innerHTML = "Your Estimate";
        formText.innerHTML = `<p>Your estimated utility bill in ${destination_state} is ${estimated_bill}<br>
        This may or may not be accurate!</p>
        <br>
        <button type="button" value="Next" onclick="nextStep()" id="next">Restart</button>`;
        circle2.classList.remove(uncheckedCircle);
        circle2.classList.add(checkedCircle);
        circle3.classList.remove(incompleteStepCircle);
        circle3.classList.add(currentStepCircle);
        return;
    }
    if(step == 3) {
        step = 1;
        formText.innerHTML = step1;
        stepInfo.innerHTML = "Step 1: Origin Details";
        circleHTML.innerHTML = circlesDefault;
        return;
    }
};

function validateForm(){

    if(step == 1){
        origin_state = document.getElementById("origin_state").value.toUpperCase();
        origin_bill = document.getElementById("origin_bill").value;
        // Test for 2 or 5 characters
        if(origin_state.length == 2 || origin_state.length == 5){
            // Test for 2 letters or 5 numbers
            if(state.test(origin_state) || zip.test(origin_state)){
                
            }
            else {
                document.getElementById("origin_state").style.boxShadow = "inset -1px 2px 5px rgba(235, 11, 11, 0.9)";
                return false;
            }
        }
        else {
            document.getElementById("origin_state").style.boxShadow = "inset -1px 2px 5px rgba(235, 11, 11, 0.9)";
            return false;
        }
        // Test for dollar value
        if(dollar.test(origin_bill)){
            return true;
        }
        else {
            document.getElementById("origin_bill").style.boxShadow = "inset -1px 2px 5px rgba(235, 11, 11, 0.9)";
            return false;
        }
    }


    if(step == 2){
        destination_state = document.getElementById("destination_state").value;
        if(destination_state.length == 2 || destination_state.length == 5){
            // Test for 2 letters or 5 numbers
            if(state.test(origin_state) || zip.test(origin_state)){
                return true;
            }
            else {
                document.getElementById("destination_state").style.boxShadow = "inset -1px 2px 5px rgba(235, 11, 11, 0.9)";
                return false;
            }
        }
        else {
            document.getElementById("destination_state").style.boxShadow = "inset -1px 2px 5px rgba(235, 11, 11, 0.9)";
            return false;
        }
    }

    if(step == 3) {
        return true;
    }
}

function dropMenu(){
    if(toggle == false){
        menu.style.display = "inline-block";
        toggle = true;
        return;
    }
    else {
        menu.style.display = "none";
        toggle = false;
    }
};



// Close Menu when clicking outside the menu
// main.onclick = function() {closeMenu()};

// function closeMenu(){
//     if(toggle = true){
//         menu.style.display = "none";
//     }
// };