let project = document.getElementsByClassName('project');
let elementSelected = document.getElementsByClassName('list-group-item');

//this function shows the project that is active and hides the others
function showActiveProject () {
  project[0].style.display = "block";
  for(let i in elementSelected) {
    elementSelected[i].onclick = function (){
      project[i].style.display = "block";
      let elementsToHide = [...project].filter(elem => elem !== project[i])
      elementsToHide.forEach(elem => elem.style.display = "none");
    }
  }
}

showActiveProject();