//console.log('Hello world!')
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

//document.addEventListener("mousedown", clickEvent);
document.addEventListener("keydown", keyEvent)


var changeText = function()
{
    htag.innerText = arguments[0];
}

var keyEvent = function(e)
{
    console.log(e);
}

//console.log(htag);