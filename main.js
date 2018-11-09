var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var dragging = false;
radius = 10
context.lineWidth = radius*2;

var engage = function(e){
    dragging = true;
    putPoint(e)
}
var disengage = function(){
    dragging = false;
}
function clearCanvas(canvas){
    canvas.width = canvas.width;
}
var putPoint = function (e){
    if(dragging){
        context.lineTo(e.clientX,e.clientY);
        context.stroke();
        context.beginPath();
        context.arc(e.clientX,e.clientY,radius,0,Math.PI*2);
        context.fill();}   
        context.beginPath();
        context.moveTo(e.clientX,e.clientY)
        var x = e.keyCode;
        if (x == 98){ //b
            context.fillStyle() = "blue";
            context.strokeStyle() = "blue";
        }
        if (x == 103){//g

        }
        if (x == 114){//r

        }
        if (x == 121){//y

        }
        if (x == 38){//uparrow
            
        }
        if (x == 40){//downarrow
            
        }
        if (x == 32){
            clearCanvas(canvas);//spacebar
        }
}
canvas.addEventListener("mousedown",engage);
canvas.addEventListener("mousemove",putPoint);
canvas.addEventListener("mouseup",disengage);

