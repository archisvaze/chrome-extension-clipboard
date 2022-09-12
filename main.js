

let button = document.querySelector(".button");
let title = document.querySelector(".title");



let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let date = new Date()
document.querySelector(".date").innerHTML = ` ${days[date.getDay()]}  ${months[date.getMonth()]} ${date.getDate()}`


let clips = [];
// getFromLocalStorage();

let addButton = document.querySelector(".add-button")
addButton.addEventListener("click", add);
document.querySelector(".add-input").addEventListener("keyup", (e) => {
  if (e.key == 'Enter') {
    add();
    e.target.blur();
  }
})


function add() {
  let clip = document.querySelector(".add-input").value;
  if (clip !== " " && clip !== "") {
    let newClip = {
      id: Date.now(),
      name: clip
    }
    clips.unshift(newClip);
    renderClips(clips);
    // addToLocalStorage(clips);
    document.querySelector(".add-input").value = "";
  }

}

function renderClips(clips) {
  document.querySelector(".container").innerHTML = `<h2 class="">Clipboard</h2>`;
  clips.forEach(clip => {
    let newClip = document.createElement("div");
    newClip.innerHTML = `<h3 class="clip-title">${clip.name}</h3>`
    document.querySelector(".container").appendChild(newClip);
  })

}

function addToLocalStorage(clips) {
  localStorage.setItem('clips', JSON.stringify(clips));
  renderTodos(clips);
}

function getFromLocalStorage() {
  let localclips = localStorage.getItem('clips');
  if (localclips) {
    clips = JSON.parse(localclips);
    renderTodos(clips);
  }
}
