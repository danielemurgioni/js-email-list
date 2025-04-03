axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) =>{
    //inserisco all'interno del DOM l'email datami dall'API scelta
    //prendo l'elemento dal DOM
    const emailContainer = document.getElementById("email-container")
    // dato dell'API
    email = resp.data.response;
    //ciclo for per stampare nel DOM piu email
    for(let i=0; i<10; i++){
        //dato dell'API
        emailHtml = `<div id="email">${email}</div>`
        emailContainer.innerHTML += emailHtml
    }
})