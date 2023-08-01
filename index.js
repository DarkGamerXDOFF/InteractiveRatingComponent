let ratingState = document.querySelector("#rating-state");
let thankYouState = document.querySelector("#thank-you-state");
let ratingText = document.querySelector("#rating");

let score = null;

let buttonList = document.querySelectorAll(".rating");
    buttonList = [...buttonList];

buttonList.forEach(element => {
    element.addEventListener("click", 
        function() {
            score = element.firstElementChild.innerHTML
            ratingText.innerHTML = score;
        }
    )
});

function Next(){
    if ((score >= 1 || score <= 5) && score != null) {
        ratingState.setAttribute("class", "card hidden");
        thankYouState.setAttribute("class", "card");
    } 
}