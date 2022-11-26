let input=document.getElementById("text");
input.addEventListener("keydown",function(){
    alert("Ascii Code For "+event.key+" = "+ event.keyCode);
})