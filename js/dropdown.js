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
var dark1 = '#160c20';
var dark2 = 'rgb(29, 4, 31)';
var dark290 = 'rgba(29, 4, 31, .9)';
var lightshadow = 'rgba(220, 226, 129, 0.5)';
var darkshadow = '';

function darkMode() {
    if(modeToggle == false) {
        root.style.setProperty('--foreground1', '#5E0B73');
        root.style.setProperty('--foreground2', '#31043D');
        root.style.setProperty('--foreground290', '#31043D90');
        root.style.setProperty('--background1', '#DCF0DE');
        root.style.setProperty('--background2', '#D1F2CC');
        root.style.setProperty('--background290', '#D1F2CC90');
        root.style.setProperty('--shadow1', '#B787C280');
        modeToggle = true;
        return;
    }
    else {
        root.style.setProperty('--foreground1', light1);
        root.style.setProperty('--foreground2', light2);
        root.style.setProperty('--foreground290', light290);
        root.style.setProperty('--background1', dark1);
        root.style.setProperty('--background2', dark2);
        root.style.setProperty('--background290', dark290);
        root.style.setProperty('--shadow1', lightshadow);
        modeToggle = false;
        return;
    }
}