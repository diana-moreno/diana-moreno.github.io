let project = document.getElementsByClassName('project');
let elementSelected = document.querySelectorAll('.list-group-item');


// This function shows the project that is active and hides the others
// If no project is selected, shows the first
// Only the clicked element will remain white in the projects menu.
function showActiveProject () {
  project[0].style.display = "block";
  for(let i = 0; i < elementSelected.length; i++) {
      elementSelected[i].onclick = function (){
        for(let j = 0; j < elementSelected.length; j++) {
          elementSelected[j].style.backgroundColor = '#b88d8c8f';
          elementSelected[j].style.color = 'white';
        }
        elementSelected[i].style.backgroundColor = 'white';
        elementSelected[i].style.color = '#495057';
        project[i].style.display = "block";
        let elementsToHide = [...project].filter(elem => elem !== project[i])
        elementsToHide.forEach(elem => elem.style.display = "none");
      }
  }
}

showActiveProject();
