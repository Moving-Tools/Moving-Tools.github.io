var button = document.getElementById("next");
var formText = document.getElementById("formText");
var main = document.getElementsByTagName("main");

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

var step1 = `<label for="origin_state">Current State:</label>
<input type="text" id="origin_state" name="origin_state" placeholder="CA" required>

<label for="origin_bill">Total Utilities:</label>
<input type="text" id="origin_bill" name="origin_bill" placeholder="123.45" required>

<label for="origin_sqft">Square Footage:</label>
<input type="text" id="origin_sqft" name="origin_sqft" placeholder="(Optional)">

<br>
<button type="button" value="Next" onclick="nextStep()" id="next">Next</button>`;

var step2 = `<label for="destination_state">Destination State:</label>
<input type="text" id="destination_state" name="destination_state" placeholder="NY" required>

<label for="destination_sqft">New Square Footage:</label>
<input type="text" id="destination_sqft" name="destination_sqft" placeholder="(Optional)">

<br>
<button type="button" value="Next" onclick="nextStep()" id="next">Next</button>`;

// Stored Variables

let origin_state = 'CA';
let destination_state = 'NY';
let origin_bill = 123.45;
let estimated_bill = 0;
const billData = {'AK': 280, 'AL': 222, 'AR': 198, 'AZ': 232, 'CA': 239, 'CO': 202, 'CT': 301, 'DE': 227, 'FL': 237, 'GA': 251, 'HI': 532, 'IA': 231, 'ID': 147, 'IL': 202, 'IN': 211, 'KS': 223, 'KY': 218, 'LA': 174, 'MA': 265, 'MD': 221, 'ME': 278, 'MI': 212, 'MN': 207, 'MO': 241, 'MS': 188, 'MT': 157, 'NA': 187, 'NC': 222, 'ND': 212, 'NH': 277, 'NJ': 236, 'NM': 185, 'NV': 173, 'NY': 277, 'OH': 250, 'OK': 224, 'OR': 178, 'PA': 226, 'RI': 305, 'SC': 266, 'SD': 186, 'TN': 197, 'TX': 212, 'UT': 150, 'VA': 216, 'VT': 270, 'WA': 164, 'WI': 194, 'WV': 195, 'WY': 191};
let origin_bill_ref = 0;
let destination_bill_ref = 0;
let origin_sqft = 0;
let destination_sqft = 0;
let sqft_ratio = 0;
let sq_ft_text = '';

// RegEx matching

let state = /[A-Z][A-Z]/;
// let zip = /\d\d\d\d\d/;
let dollar = /^\$?\d+([.]\d\d)?$/;
let dollarFilter = /\d+([.]\d\d)?$/;
let sqft = /^\d*$/;
let sqft_show = false;

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
        stepInfo.innerHTML = "Your Estimate";
        formText.innerHTML = `<p>Your estimated utility bill in ${destination_state} is ${estimated_bill}<br>
        ${sq_ft_text}</p>
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
        origin_sqft = document.getElementById("origin_sqft").value;

        // Test for existence in object
        if(origin_state in billData) {
            origin_bill_ref = billData[origin_state];
            document.getElementById("origin_state").style.boxShadow = "inset -1px 2px 5px rgba(32, 16, 39, 0.7)";
            }
            else {
                document.getElementById("origin_state").style.boxShadow = "inset -1px 2px 5px rgba(235, 11, 11, 0.9)";
                return false;
            }
        // Test for dollar value
        if(dollar.test(origin_bill)) {
            origin_bill = dollarFilter.exec(origin_bill)[0];
            return true;
        }
        else {
            document.getElementById("origin_bill").style.boxShadow = "inset -1px 2px 5px rgba(235, 11, 11, 0.9)";
            return false;
        }
    }

    if(step == 2){

        destination_state = document.getElementById("destination_state").value;
        destination_sqft = document.getElementById("destination_sqft").value;
        
        if(destination_state in billData) {
            destination_bill_ref = billData[destination_state];
            // Calculate bill
            estimated_bill = Math.round(origin_bill * destination_bill_ref / origin_bill_ref);
            // If sqft was entered both times, use it as a multiplier
            if(sqft.test(origin_sqft) && sqft.test(destination_sqft)) {
                estimated_bill = estimated_bill * destination_sqft / origin_sqft;
                sq_ft_text = 'Your square footage was taken into account!';
            }
            else {
                sq_ft_text = 'Square footage was entered incorrectly or left blank!';
            }
            return true;
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
