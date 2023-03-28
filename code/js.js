document.getElementById("add-Note").addEventListener("click", function() {
    makeCard("name", "text", "important");
});

document.getElementById("FSadd-note").addEventListener("click", function() {
    makeCard("FSname", "FStext", "FSimportant");
});
function makeCard(nameID, textID, checkbox) {
    console.log("Hello");
    let name = document.getElementById(nameID);
    let teksti = document.getElementById(textID);
    let important = document.getElementById(checkbox).checked;
    
    
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
        box.style.borderColor = "orange";
    }
    
    document.querySelector(".main").append(box);
    name.value = "";
    teksti.value = "";
    console.log("hi");
}

function deleteCard(e) {
    document.querySelector(".main").removeChild(e.target.parentNode.parentNode);
}

function createElements(type, classname, content) {
    let element = document.createElement(type);
    element.className = classname;
    element.textContent = content;
    return element;
}