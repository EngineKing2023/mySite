let myDocument = document.documentElement;
let btn =document.getElementById("btn");
let button1 =document.querySelector(".button1");
let button2 =document.querySelector(".button2");
let button3 =document.querySelector(".button3");
let button4 =document.querySelector(".button4");
let button5 =document.querySelector(".button5");
let button6 =document.querySelector(".button6");

let aboutUs = document.querySelector(".aboutUs");
let isShowAboutUs = true;
let contact = document.querySelector(".contact");
let isShowContact = true;
let engine = document.querySelector(".engine");
let isShowEngine = true;
let unity = document.querySelector(".unity");
let isShowUnity = true;
let websites = document.querySelector(".websites");
let isShowWebsites = true;
let plumber = document.querySelector(".plumber");
let isShowPlumber = true;

function showAboutUs(){
    if(isShowAboutUs){
        
        aboutUs.style.display ="block";
        aboutUs.style.position = "absolute";
        isShowAboutUs = false;
    }
}
function closeAboutUs(){
    if(closeAboutUs){
        aboutUs.style.display ="none";
        isShowAboutUs = true;
    }
}



function showContact(){
if(isShowContact){
    contact.style.display ="block";
    contact.style.position = "absolute";
    isShowContact = false;
}
    
}
function closeContact(){
    if(closeContact){
        contact.style.display ="none";
        isShowContact = true;
    }
}
function showEngine(){
    if(isShowEngine){
        engine.style.display ="block";
        engine.style.position = "absolute";
        isShowEngine = false;
    }
}
function closeEngine(){
    if(closeEngine){
        engine.style.display ="none";
        isShowEngine = true;
    }
}
function showUnity(){
    if(isShowUnity){
        unity.style.display ="block";
        unity.style.position = "absolute";
        isShowUnity = false;
    }
}
function closeUnity(){
    if(closeUnity){
        unity.style.display ="none";
        isShowUnity = true;
    }
}
function showWebsites(){
    if(isShowWebsites){
        websites.style.display ="block";
        websites.style.position = "absolute";
        isShowWebsites = false;
    }
}
function closeWebsites(){
    if(closeWebsites){
        websites.style.display ="none";
        isShowWebsites = true;
    }
}
function showPlumber(){
    if(isShowPlumber){
        plumber.style.display ="block";
        plumber.style.position = "absolute";
    }
}
function closePlumber(){
    if(closePlumber){
        plumber.style.display ="none";
        isShowPlumber = true;
    }
}

btn.addEventListener("click",()=>{
    if(btn.textContent == "enter"){

        if(myDocument.requestFullscreen){
            myDocument.requestFullscreen();
        }
       else if(myDocument.msRequestFullscreen){
            myDocument.msRequestFullscreen();
        }
        else if(myDocument.mozRequestFullscreen){
            myDocument.mozRequestFullscreen();
        }
        
        else if(myDocument.webkitRequestFullscreen){
            myDocument.webkitRequestFullscreen();
        }



        btn.textContent = "exit";
        button1.style.display="block";
        button2.style.display="block";
        button3.style.display="block";
        button4.style.display="block";
        button5.style.display="block";
        button6.style.display="block";
    }
    else{
            if(document.exitFullscreen){
                document.exitFullscreen();
            }
            else if(document.msexitFullscreen){
                document.msexitFullscreen();
            }
            else if(document.mozexitFullscreen){
                document.mozexitFullscreen();
            }
            else if(document.webkitexitFullscreen){
                document.webkitexitFullscreen();
            }




            btn.textContent = "enter";
            button1.style.display="none";
            button2.style.display="none";
            button3.style.display="none";
            button4.style.display="none";
            button5.style.display="none";
            button6.style.display="none";
            
    }
})