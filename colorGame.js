

var colorsFill=document.querySelectorAll(".square");
var corectColor;
var easybtn=document.querySelector("#ebtn");
var hardbtn=document.querySelector("#hbtn");
var length=6;
easybtn.addEventListener("click",function(){
length=3;
var choser=Math.floor(Math.random()*length);
for(var i=0;i<6;i++)
colorsFill[i].style.background="#232323";
for(var i=0;i<length;i++)
{ 
    var r=Math.floor(Math.random()*255+1);
    var b=Math.floor(Math.random()*255+1);
    var g=Math.floor(Math.random()*255+1);
    var coloring="rgb("+r+", "+b+", "+g+")";
    colorsFill[i].style.background=coloring;
    if(choser==i)
    corectColor=coloring;
}
var colorshow=document.querySelector(".display-2");
colorshow.textContent=corectColor;
for(var j=0;j<length;j++)
{ 
    colorsFill[j].addEventListener("click",function(){
        var cc=this.style.background;
        if(cc===corectColor)
        {
            alert("Whoo sahi h");
            AllSame(cc);

        }
        else
        {
            this.style.background="#232323";
            alert("wrong");
        }
    });
}
function AllSame(color)
{
    for(var i=0;i<colorsFill.length;i++)
    {  
        colorsFill[i].style.background=color;
    } 
}
});
hardbtn.addEventListener("click",function(){
length=6;
var choser=Math.floor(Math.random()*length);
for(var i=0;i<6;i++)
colorsFill[i].style.background="#232323";
for(var i=0;i<length;i++)
{ 
    var r=Math.floor(Math.random()*255+1);
    var b=Math.floor(Math.random()*255+1);
    var g=Math.floor(Math.random()*255+1);
    var coloring="rgb("+r+", "+b+", "+g+")";
    colorsFill[i].style.background=coloring;
    if(choser==i)
    corectColor=coloring;
}
var colorshow=document.querySelector(".display-2");
colorshow.textContent=corectColor;
for(var j=0;j<length;j++)
{ 
    colorsFill[j].addEventListener("click",function(){
        var cc=this.style.background;
        if(cc===corectColor)
        {
            alert("Whoo sahi h");
            AllSame(cc);

        }
        else
        {
            this.style.background="#232323";
            alert("wrong");
        }
    });
}
function AllSame(color)
{
    for(var i=0;i<colorsFill.length;i++)
    {  
        colorsFill[i].style.background=color;
    } 
}
});
var choser=Math.floor(Math.random()*length);
for(var i=0;i<6;i++)
colorsFill[i].style.background="#232323";
for(var i=0;i<length;i++)
{ 
    var r=Math.floor(Math.random()*255+1);
    var b=Math.floor(Math.random()*255+1);
    var g=Math.floor(Math.random()*255+1);
    var coloring="rgb("+r+", "+b+", "+g+")";
    colorsFill[i].style.background=coloring;
    if(choser==i)
    corectColor=coloring;
}
var colorshow=document.querySelector(".display-2");
colorshow.textContent=corectColor;
for(var j=0;j<length;j++)
{ 
    colorsFill[j].addEventListener("click",function(){
        var cc=this.style.background;
        if(cc===corectColor)
        {
            alert("Whoo sahi h");
            AllSame(cc);

        }
        else
        {
            this.style.background="#232323";
            alert("wrong");
        }
    });
}
function AllSame(color)
{
    for(var i=0;i<colorsFill.length;i++)
    {  
        colorsFill[i].style.background=color;
    } 
}