
document.getElementById("add-Note").addEventListener("click", () => {
    let name = document.getElementById("name");
    let teksti = document.getElementById("text");
    let important = document.getElementById("important").checked;
    

    let date = new Date();
    let boxText = `(${name.value}) \t ${date.getUTCDate()}.${date.getUTCMonth()}.${date.getUTCFullYear()} \t ${date.getHours()}:${date.getMinutes()}`;
    let boxHeader = createElements("div", "note-header", boxText);

    let text = document.createElement("p");
    text.className = "note-text";
    text.textContent = teksti.value;
    
    let btnBox = createElements("div", "btn-box");
    let button = createElements("button", "btn btn-danger", "Delete");
    button.type = "button";
    btnBox.append(button);
    btnBox.addEventListener("click", deleteCard);
    
    let box = createElements("div", "note-box", "");
    box.append(boxHeader);
    box.append(text);
    box.append(btnBox);
    
    if (important) {
        box.style.borderLeft = "12px solid orange";
    }

    document.querySelector(".main").append(box);
    name.value = "";
    teksti.value = "";
})

function deleteCard(e) {
    document.querySelector(".main").removeChild(e.target.parentNode.parentNode);
}

function createElements(type, classname, content) {
    let element = document.createElement(type);
    element.className = classname;
    element.textContent = content;
    return element;
}