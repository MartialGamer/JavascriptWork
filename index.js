console.log('Hello world!')
var clickEvent = function()
{
    var name = window.prompt("Please tell me your name!", "Person")
    
    if(name == null || name == '')
    {
        changeText("Hello Stranger");
    }
    else
    {
        changeText("Hello " + name + "!");
    }
};
var htag = document.getElementById("hi");

document.addEventListener("mousedown", clickEvent);


var changeText = function()
{
    htag.innerText = arguments[0];
}


//console.log(htag);