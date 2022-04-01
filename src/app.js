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

