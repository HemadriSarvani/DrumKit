// for(var i=0;i<document.querySelectorAll(".drum").length;i++)
// {
// document.querySelectorAll("button")[i].addEventListener("click",handle);
// }
// function handle()
// {
//     alert("i have been clicked");
// }

for(var i=0;i<document.querySelectorAll(".drum").length;i++)
    {
    document.querySelectorAll("button")[i].addEventListener("click",function()
    {
        var switchvariable=this.innerHTML;
        playSound(switchvariable);
        addAnimations(switchvariable)
        
    })
    }
    document.addEventListener("keydown",function(event)
{
    var pressed=event.key;
    playSound(pressed)
    addAnimations(pressed)
    }

    
)

function playSound(play)
{
    switch(play)
        {
                case "w":
                
                    var w=new Audio('sounds/crash.mp3');
                    w.play();
                    break;
                
                case "a":
                
                    var a=new Audio('sounds/kick-bass.mp3');
                    a.play();
                    break;
                
                case "s":
                
                    var s=new Audio('sounds/snare.mp3');
                    s.play();
                    break;
                
                case "d":
                
                    var d=new Audio('sounds/tom-1.mp3');
                    d.play();
                    break;
                
                case "j":
                
                    var d=new Audio('sounds/tom-2.mp3');
                    d.play();
                    break;
                
                case "k":
                
                    var k=new Audio('sounds/tom-3.mp3');
                    k.play();
                    break;
                
                case "l":
                
                    var l=new Audio('sounds/tom-4.mp3');
                    l.play();
                    break;
                
        
}
}

function addAnimations(press)
{
    document.querySelector("."+press).classList.add("pressed");
    setTimeout(function()
{
    document.querySelector("."+press).classList.remove("pressed");
},100);
}