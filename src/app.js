const originalsCopy = document.querySelector(".originals")
const copySection = document.querySelector(".copy-container")


function copyFunc(evt) {
  const copyTemplate = `
  <div>
      <p>${evt.target.innerText}</p>
  </div>
  `
  copySection.insertAdjacentHTML("afterbegin", copyTemplate)
}

originalsCopy.addEventListener('click', copyFunc)



const deletecopies = document.querySelectorAll(".copies")

function copyDelete() {
  const deletebutton = document.querySelector("button") //not getting called, tried everything idk.
  const removal = document.getElementById(".copy-container")
  removal.remove();
}

  deletebutton.addEventListener('click', copyDelete)

