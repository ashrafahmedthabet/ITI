setTimeout(function(){
    let parentDiv=document.getElementById("container");
    let header=document.getElementById("header");
    let clone=header.cloneNode(true);
    parentDiv.appendChild(clone);
    clone.setAttribute("id","footer");
    //justify header to right
    header.classList.add("align-right"); 
    //justify header to left
    clone.classList.add("align-left"); 
    // ul nav
    let ul=document.getElementById("nav");
    //change point to circle
    ul.style.listStyleType="circle";
},3000);
