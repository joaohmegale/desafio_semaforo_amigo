const button = document.getElementById('button');

let clickEnabled = true;
let currentColor = '';
let curretnTimeOut = null;


function red() {
    currentColor = 'RED';
    let cor=document.getElementById("red");
    cor.style.backgroundColor="red";

    curretnTimeOut=setTimeout(() => {
        cor.style.backgroundColor="rgb(108, 72, 72)";
        green();
    }, 15000);
}

function yellow() {
    currentColor = 'YELLOW';
    let cor=document.getElementById("yellow");
    cor.style.backgroundColor="yellow";

    curretnTimeOut=setTimeout(() => {
        cor.style.backgroundColor="rgb(123, 123, 67)";
        red();
    }, 3000);
}

function green() {
    currentColor = 'GREEN';
    let cor=document.getElementById("green");
    cor.style.backgroundColor="rgb(0,255,0)";

    curretnTimeOut=setTimeout(() => {
        cor.style.backgroundColor="rgb(67,112,67)";
        yellow();

    }, 10000);

}

function pedestre() {
    let cor = document.getElementById("green");
    clearTimeout(curretnTimeOut);
    setTimeout(() => {
        cor.style.backgroundColor="rgb(67,112,67)";
        yellow();

    }, 3000);
}

green();

const click = button.addEventListener("click",function() {
    if (clickEnabled && currentColor==='GREEN') {
        pedestre();
        clickEnabled = false;
        setInterval(() => clickEnabled = true, 60000);
    }

});




