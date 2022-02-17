
function createCard(niceImg, nameSurname, numberAge, fullAdress, fullEmail) {
    let newImg = document.createElement("img");
    newImg.className = "img";
    newImg.src = niceImg;

    let newName = document.createElement("name");
    newName.textContent = nameSurname;

    let newAge = document.createElement("age");
    newAge.textContent = numberAge;

    let newAdress = document.createElement("adress");
    newAdress.textContent = fullAdress;

    let newEmail = document.createElement("email");
    newEmail.textContent = fullEmail;

    let newCard = document.createElement("div");
    newCard.className = "item";

    newCard.append(newImg, newName, newAge, newEmail);

    return newCard;
};

async function getData() {
    const requestURL = 'https://randomuser.me/api/';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const data = await response.json();

    let { first, last } = data.results[0].name;
    let { email } = data.results[0];
    let { name, number } = data.results[0].location.street;
    let { age } = data.results[0].dob;
    let { medium } = data.results[0].picture;
    let allInfo = `${medium}, ${first} ${last}, ${age}, ${name} ${number}, ${email}`
    return allInfo;
}

function appendCard() {

    //     // let img1 = "https://i.pinimg.com/564x/44/15/ba/4415ba5df0f4bfcee5893d6c441577e0.jpg";
    //     // let name1 = "Jonana Jona";
    //     // let age1 = "35 age";
    //     // let adress1 = "Ateities takas 5";
    //     // let email1 = "jonas.junukas@gmail.com";

    let parent = document.getElementById("main");
    let card = createCard(getData(0), getData(1), getData(2), getData(3), getData(4));
    console.log(card);
    parent.append(card);
}

let btn = document.getElementById("btn");
btn.addEventListener("click", appendCard);