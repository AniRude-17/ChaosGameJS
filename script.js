let maxX=1200;
let maxY=600;
var xPoints=[];
var yPoints=[];
var POINTS=3;
let t=1,counts=0,prevX=-1,prevY=-1,firstX=-1,firstY=-1,ready=0,currX,currY;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


function setup()
{
    
    POINTS = parseInt(prompt("Number of Points"));
    console.log(POINTS);
    var myCanvas=createCanvas(1200,600);
    myCanvas.parent("drawArea");
    background(12,10,10);
}

function mouseClicked() {
    if(counts==POINTS+1) {
        if(mouseX<=maxX && mouseY<=maxY) {
            fill(211, 131, 23);
            circle(mouseX,mouseY,2);
            counts++;
            currX=mouseX;
            currY=mouseY;
            ready=1;
        }
    }
    if(mouseX<=maxX && mouseY<=maxY && counts<POINTS) {
        fill(211, 131, 23);
        circle(mouseX,mouseY,10);
        // document.getElementById("temp").innerHTML = "X:"+mouseX + "Y: "+mouseY;
        
        if(prevX!=-1 && prevY!=-1 && counts!=0) {
            strokeWeight(4);
            stroke('red');
            line(mouseX,mouseY,prevX,prevY);
        }

        if(counts==0)
        {
            firstX=mouseX;
            firstY=mouseY;
        }
        prevX=mouseX;
        prevY=mouseY;
        xPoints.push(mouseX);
        yPoints.push(mouseY);
        counts++;
    }
    if(counts==POINTS) {
        stroke('red');
        line(firstX,firstY,prevX,prevY);
        counts++;
    }

    if(ready) {
        
        for(i=0;i<2000;i++) {
            t=Math.floor(Math.random()*POINTS);
            midX=(currX+xPoints[t])/2;
            midY=(currY+yPoints[t])/2;
            // console.log(midX);

            fill(53, 177, 35);
            strokeWeight(0);
            stroke(40);
            circle(midX,midY,2);
            currX=midX;
            currY=midY;
        }
    }
}

