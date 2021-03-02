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

// Function runs on resize
function getWindowWidth() {
    let windowWidth = window.innerWidth;
    setTimeout(function(){
        if (windowWidth >= 800 && toggle == true) {
            menu.style.display = 'none';
        }
    }, 100);
}

window.addEventListener('resize', getWindowWidth);