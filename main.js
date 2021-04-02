// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


/*Add the .hidden class to the error modal in the HTML so it does not appear when the page first loads*/
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("modal").hidden = true;
  const loveClick = document.querySelectorAll("span.like-glyph")
  console.log(loveClick);

  // iterate through loveClick
  forEach(loveClick).addEventListener("click", () => {

  })
});





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
