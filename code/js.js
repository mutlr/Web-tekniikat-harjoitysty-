

function makeElement(elementType, classname, content) {
    const element = document.createElement(elementType);
    element.className = classname;
    element.textContent = content;
    return element;
}
function deleteCard(e) {
    const target = e.target.parentNode;
    document.getElementById("card-container").removeChild(target);
}
document.getElementById("add").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const important = document.getElementById("important").checked;
    if (name === "" || description === "") {
        return;
    }
    const date = new Date();
    const dateTime = date.getDay() + "." + date.getMonth() + "." + date.getFullYear() + "\t" + date.getHours() + ":" + date.getMinutes();
    const cardHeader = makeElement("h3", "card-header", (name + "\t" + dateTime));
    const cardAuthor = makeElement("div", "card-description", description);
    const deleteBtn = makeElement("button", "btn btn-danger", "Delete");
    deleteBtn.type = "button";
    
    const card = makeElement("div", "card", "");
    if (important) {
        card.style.borderLeftColor = "red";
    }
    card.append(cardHeader);
    card.append(cardAuthor);
    card.append(deleteBtn);
    document.getElementById("card-container").append(card);
    
    deleteBtn.addEventListener("click", deleteCard);

    document.getElementById("form").reset();
});
document.getElementById("clear").addEventListener("click", () => {
    document.getElementById("form").reset();
});
