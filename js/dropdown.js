var menu = document.getElementById("menu");
var menuToggle = false;

function dropMenu(){
    if(menuToggle == false){
        menu.style.display = "inline-block";
        menuToggle = true;
        return;
    }
    else {
        menu.style.display = "none";
        menuToggle = false;
    }
};

// Function runs on resize
function getWindowWidth() {
    let windowWidth = window.innerWidth;
    setTimeout(function(){
        if (windowWidth >= 800 && menuToggle == true) {
            menu.style.display = 'none';
        }
    }, 100);
}

window.addEventListener('resize', getWindowWidth);

// Dark Mode vars

var root = document.querySelector(':root');
var modeToggle = false;

var light1 = '#bce4bc';
var light2 = '#84d876';
var light290 = '#84d87690';
var dark1 = '#1a171d';
var dark2 = 'rgba(29, 4, 31, 0.5)';
var lightshadow = 'rgba(220, 226, 129, 0.5)';

function darkMode() {
    console.log("test");
    if(modeToggle == false) {
        root.style.setProperty('--foreground1', dark1);
        root.style.setProperty('--foreground2', dark2);
        root.style.setProperty('--foreground290', dark2);
        root.style.setProperty('--background1', light1);
        root.style.setProperty('--background2', light2);
        root.style.setProperty('--shadow1', dark2);
    }
}