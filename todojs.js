var addButton = document.getElementById("add")
var addnewcards = document.getElementsByClassName("addnewcards")[0]
const maincontainer = document.getElementsByClassName("maincontainer")[0]
const contents = document.getElementsByClassName("contents")[0]
const addlistContainer = document.getElementsByClassName("addlistcontainer")[0]
const addnewcards1 = document.getElementsByClassName("addnewcards1")[0]

var currentElement ;
const newWindow = (e) => {
    addnewcards1.style.display = "flex";
    currentElement = e;
}//displaying the elements in flex

const newWindow1 = (card) => {
    maincontainer.style.display = "none";
    contents.append(card);
    contents.style.display = "block";
}//inside card styling

// createcard 
const createCard = (heading) => {
    var cardElement = document.createElement("div");
    cardElement.className = "card"
    let h4 = document.createElement("h4")
    h4.innerText = heading
    h4.addEventListener("click", (e) => {
        newWindow1(e.target.parentNode)
    })

    let hr = document.createElement("hr")
    let d = document.createElement("section")
    d.className = "delete material-icons";
    d.innerText = "delete";
    let add = document.createElement("section")
    add.className = "material-icons";
    add.innerText = "add";//addlist creating
    add.addEventListener("click", (e) => {
        newWindow(e.target.parentNode)
    })//addlist inside add
    d.addEventListener("click", (e) => {
        deleteCard(e)
    })//addlist inside delete
    cardElement.append(h4);
    cardElement.append(hr);
    cardElement.append(d);
    cardElement.append(add)
    addlistContainer.append(cardElement);
    addnewcards.style.display = "none";}//inside card

const addNewItem = () => {
    let newValue = document.getElementById("head1").value
    let div = document.createElement("div")
    div.innerText = newValue
    let button = document.createElement("button")
    button.innerText = "Done"
    button.addEventListener("click", (e) => {
        e.target.style.display = "none"
        e.target.parentNode.style.textDecoration = "line-through"
    })
    div.append(button)
    currentElement.append(div)
    addnewcards1.style.display = "none"
}//elements inside the cards


addButton.addEventListener("click", () => {
    addnewcards.style.display = "flex";
})

const deleteCard = (e) => {
    e.target.parentNode.style.display = "none"
}

const addCard = () => {
    let inputValue = document.getElementById("head").value;
    createCard(inputValue)
}//to add the card with values