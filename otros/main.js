let features = document.getElementsByClassName('card-footer');
let hidden = document.getElementsByClassName('hidden');
let cards = document.getElementsByClassName('card');

features[0].onclick = function(event) {
  hidden[0].style.display = "block";
  cards[0].style.display = "none"
  //cards[0].innerHTML = hidden[0].innerHTML
}
hidden[0].onclick = function(event) {
  hidden[0].style.display = "none";
  cards[0].style.display = "block"
}

