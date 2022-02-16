
function createCard() {
    let img = document.createElement("img");
    img.className = "img";
    img.src = "https://randomuser.me/api/portraits/med/women/20.jpg";

    let name = document.createElement("name");
    name.textContent = "Loreta Loretaite";

    let age = document.createElement("age");
    age.textContent = "35 age";

    let adress = document.createElement("adress");
    adress.textContent = "Lauku gatve 4";

    let email = document.createElement("email");
    email.textContent = "lor.lor@gmail.com";

    let newCard = document.createElement("div");
    newCard.className = "item";

    newCard.append(img, name, age, adress, email);

    return newCard;
};

let parent = document.getElementById("main");
let card = createCard();
parent.appendChild(card);



