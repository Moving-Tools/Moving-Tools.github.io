var menu = document.getElementById("menu");
var toggle = false;

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