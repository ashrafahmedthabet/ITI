let leftImg= document.getElementById("img1");
let leftImgLoc = parseInt(getComputedStyle(leftImg).left);
let rightImg= document.getElementById("img2");
let rightImgLoc = parseInt(getComputedStyle(rightImg).right);
let topImg= document.getElementById("img3");
let topImgLoc = parseInt(getComputedStyle(topImg).top);
let goBtn=document.getElementById("btn1");
let moveImg;
let flag=1;
function toggle(){
    if(goBtn.innerText=="Go"||flag==1){
        goBtn.innerText="stop";
        flag=0;
        moveImg=setInterval(function(){
            if(topImgLoc>=350 && leftImgLoc>=350 && rightImgLoc >=350){
              // return img  to first position
                let back=setInterval(function () {
                  leftImgLoc-=5;
                  rightImgLoc-=5;
                    topImgLoc-=5;
                    if(topImgLoc<=0&&leftImgLoc<=0 && rightImgLoc<=0){
                        clearInterval(back);
                    }
                    else{
                    topImg.style.bottom=topImgLoc+"px";
                    leftImg.style.left=leftImgLoc+"px";
                    rightImg.style.right=rightImgLoc+"px";
                    }
                },20)
            }
            else{
              leftImgLoc+=5;
              rightImgLoc+=5;
              topImgLoc+=5;
            }
            
            topImg.style.top=topImgLoc+"px";
            leftImg.style.left=leftImgLoc+"px";
            rightImg.style.right=rightImgLoc+"px";
            document.getElementById(
              "p1"
            ).innerText = `<img src="icon1.gif" id="img1" style="position: absolute; left: ${leftImg.style.left}/>`;
            document.getElementById(
              "p2"
            ).innerText = ` <img src="icon2.gif"id="img2" style="position: absolute; right: ${rightImg.style.right}/>`;
        },20)
    }
    else{
       goBtn.innerText="Go";
        clearInterval(moveImg);
        flag=1;
    }
};
function reset(){
leftImg.style.left=0;
rightImg.style.right=0;
topImg.style.top=0;
topImgLoc=0;
rightImgLoc=0;
leftImgLoc=0;
goBtn.innerText="Go";
  clearInterval(moveImg);
  document.getElementById(
    "p1"
  ).innerText = `<img src="icon1.gif" id="img1" style="position: absolute; left: ${leftImg.style.left}/>`;
  document.getElementById(
    "p2"
  ).innerText = ` <img src="icon2.gif"id="img2" style="position: absolute; right: ${rightImg.style.right}/>`;
}
document.getElementById(
  "p1"
).innerText = `<img src="icon1.gif" id="img1" style="position: absolute; left: ${leftImg.style.left}/>`;
document.getElementById(
  "p2"
).innerText = ` <img src="icon2.gif"id="img2" style="position: absolute; right: ${rightImg.style.right}/>`;
