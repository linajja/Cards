
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

    newCard.append(newImg, newName, newAge, newAdress, newEmail);

    return newCard;
};

function appendCard(card) {
    let parent = document.getElementById("main");
    parent.append(card);
}
async function getData() {
    const requestURL = 'https://randomuser.me/api/';
    const request = new Request(requestURL);
    const response = await fetch(request, { mode: 'cors' });
    const data = await response.json();
    console.log(data);

    return data;
}

let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    getData().then(data => {
        let { picture, name, dob, location, email } = data.results[0];
        picture = `${picture.large}`;
        name = `${name.first} ${name.last}`;
        dob = dob.age;
        location = `${location.country}, ${location.city}`;
        email = email;
        let card = createCard(picture, name, dob, location, email);
        appendCard(card);
    }).catch(error => {
        console.log(error);
    });
})