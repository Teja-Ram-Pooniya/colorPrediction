document.getElementById("red").addEventListener("click",red);
document.getElementById("green").addEventListener("click",green);
document.getElementById("blue").addEventListener("click",blue);
function red(){
    var rno= Math.floor(Math.random()*3);
    console.log("Red");
    console.log(rno);
    if(rno==0){
        document.write("<h2>Red WON</h2>"); 
    }
    else{
        document.write("<h2>You Loose, Better luck Next Time...</h2>"); 
    }
}
function green(){
    var rno= Math.floor(Math.random()*3);
    console.log("Green");
    console.log(rno);
    if(rno==1){
        document.write("<h2>Green WON</h2>"); 
    }
    else{
        document.write("<h2>You Loose, Better luck Next Time...</h2>"); 
    }
}
function blue(){
    var rno= Math.floor(Math.random()*3);
    console.log("Blue");
    console.log(rno);
    if(rno==2){
        document.write("<h2>Blue WON</h2>"); 
    }
    else{
        document.write("<h2>You Loose, Better luck Next Time...</h2>"); 
    }
}