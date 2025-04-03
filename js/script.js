//prendo l'elemento dal DOM
const emailContainer = document.getElementById("email-container")

//inserisco il tutto dentro un FOR per creare email differenti
for(let i=0; i<10; i++){
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) =>{
        // dato dell'API
        email = resp.data.response;
        // tag HTML
        emailHtml = `<div id="email">${email}</div>`
        // inserisco nel DOM il tag HTML
        emailContainer.innerHTML += emailHtml
    })
}