let text= document.getElementById("heading");
let button1=document.getElementById("blueb");
let button2=document.getElementById("whiteb");

button1.onclick = function () {
    text.innerHTML="You've clicked Button 1";
};

button2.onclick = function () {
    text.innerHTML="You've clicked Button 2";
};

