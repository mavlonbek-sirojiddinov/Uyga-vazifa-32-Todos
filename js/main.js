var elSiteForm = document.querySelector(".site-form");
var elSiteInput = document.querySelector(".site-input");
var elBtnAdd = document.querySelector(".btn-add");
var elBtnCheck = document.querySelector(".btn-check");
var elPradList = document.querySelector(".prad-list");

var products = []

elSiteForm.addEventListener("submit", (e) => {
  e.preventDefault()

  var elSiteInputvalue = elSiteInput.value

  products.push(elSiteInputvalue)

  window.localStorage.setItem('key', products)

  elPradList.textContent = ""

  for(var product of products) {
    var liElement = document.createElement("li");
    liElement.textContent = product;
    liElement.style.background = 'chartreuse'
    liElement.style.color = 'white'
    liElement.style.borderRadius = '50%'
    liElement.style.fontSize = '50px'
    elPradList.appendChild(liElement);
  }
});

var elCheckForm = document.querySelector("#site-check-form");
var elCheckInput = document.querySelector(".site-input-check");
var elCheckResult = document.querySelector("h1");

elCheckForm.addEventListener("submit", (e) => {
  e.preventDefault();

  var checkinputvalue = elCheckInput.value;

  var resultCheck = products.includes(checkinputvalue);

  if (resultCheck) {
    elCheckResult.textContent = "BOR"
    elCheckResult.style.color = 'chartreuse'
  } else {
    elCheckResult.textContent = "YOQ"
    elCheckResult.style.color = 'red'
  }
});

function locbtn() {
  window.localStorage.clear()
}