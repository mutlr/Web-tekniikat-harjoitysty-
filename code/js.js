document.getElementById("add").addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let teksti = document.getElementById("text").value;
    let check = document.getElementById("important").checked;
    
    let boxHeader = document.createElement("div");
    let date = new Date();
    let space = "&ensp;"
    boxHeader.className = "box-header";
    boxHeader.textContent = `(${name}) \t ${date.getUTCDate()}.${date.getUTCMonth()}.${date.getUTCFullYear()} \t ${date.getHours()}.${date.getMinutes()}`;

    let text = document.createElement("p");
    text.className = "note-text";
    text.textContent = teksti;
    
    
    let button = document.createElement("button");
    button.className = "delete btn btn-danger";
    button.type = "button";
    button.textContent = "Delete";
    
    let box = document.createElement("div");
    box.className = "box";
    box.append(boxHeader);
    box.append(text);
    box.append(button);

    document.querySelector(".card-container").append(box);

    if (check) {
        box.style.borderColor = "blue";
    }
})