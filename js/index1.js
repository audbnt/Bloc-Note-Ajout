const bpSend = document.getElementById("bpValid");


function addElement () {
  // crée un nouvel élément div
  let newDiv = document.createElement("div");
  // et lui donne un peu de contenu
  let newContent = document.createTextNode('Hi there and greetings!');
  // ajoute le nœud texte au nouveau div créé
  newDiv.appendChild(newContent);
  
  // ajoute le nouvel élément créé et son contenu dans le DOM
  let currentDiv = document.getElementById('div1');
  document.getElementById("notesBoard").ad(newDiv, currentDiv);

}


bpSend.addEventListener("click", addElement);