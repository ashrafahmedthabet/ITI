
let imgFlag;
let message;
let win;

function handleBorder(element){
 let imgTarget =element.previousElementSibling;
  if(imgFlag!==undefined){
      imgFlag.classList.remove("border");
  }
  imgTarget.classList.add("border");
  imgFlag=imgTarget;
}
function createCard()
 {
    message = document.getElementById("text-message").value;
    win = window.open("child.html" ,"", "width=400,height=500");
    win.addEventListener("load", fillCard);
}
function fillCard() {
  let cardContainer = win.document.getElementById("card-container");
  // Styling the card
  let imgCard = document.createElement("img");
  imgCard.src = imgFlag.src;
  imgCard.style.width = "400px";
  imgCard.style.height = "400px";

  cardContainer.append(imgCard);
  // message
  let messageContainer = document.createElement("p");
  messageContainer.innerText=message;
  cardContainer.append(messageContainer);
  // Close Button
  let closeButton = document.createElement("button");
  closeButton.innerText= "Close";
  cardContainer.append(closeButton);
  // Close window
  closeButton.addEventListener("click", function () {
    win.close();
  });
}
