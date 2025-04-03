axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) =>{
    //inserisco all'interno del DOM l'email datami dall'API scelta
    const emailContainer = document.getElementById("email");
    email = resp.data.response;
    emailContainer.innerHTML = email;
})