
// function createCard(niceImg, nameSurname, numberAge, fullAdress, fullEmail) {
//     let newImg = document.createElement("img");
//     newImg.className = "img";
//     newImg.src = niceImg;

//     let newName = document.createElement("name");
//     newName.textContent = nameSurname;

//     let newAge = document.createElement("age");
//     newAge.textContent = numberAge;

//     let newAdress = document.createElement("adress");
//     newAdress.textContent = fullAdress;

//     let newEmail = document.createElement("email");
//     newEmail.textContent = fullEmail;

//     let newCard = document.createElement("div");
//     newCard.className = "item";

//     newCard.append(niceImg, nameSurname, numberAge, fullAdress, fullEmail);

//     return newCard;
// };

// let img1 = "https://i.pinimg.com/564x/44/15/ba/4415ba5df0f4bfcee5893d6c441577e0.jpg";
// let name1 = "Jonas Jonaitis";
// let age1 = "35 age";
// let adress1 = "Ateities takas 5";
// let email1 = "jonas.junukas@gmail.com";

// let parent = document.getElementById("main");
// let card = createCard(img1, name1, age1, adress1, email1);
// parent.append(card);

// function appendCard() {

// }

async function getData() {
    const requestURL = 'https://randomuser.me/api/';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const data = await response.json();

    console.log(data);

    let { email, location, name } = data.results[0];
    let email = '${email}';
    console.log(email);
    let location = '${location.city}' '${location.street.name}';
    console.log(location);
    let name = '${name.first}' '${name.last}';
    console.log(name);
    // console.log(data.results[0].email);
    // console.log(data.results[0].location.city);
    // console.log(data.results[0].location.street.name);
    // let { first, last } = data.results[0].name;
    // console.log(first + " " + last);
}
