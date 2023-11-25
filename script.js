const form = document.querySelector("form");

form.addEventListener("submit",(e) =>{
    e.preventDefault();

    const username = form.username.value;
    const password = form.password.value;
    const email = form.email.value;

    const authenticated = authentication(username,password,email)
if(authenticated){
    window.location.href = "logout.html";
}else{
    alert("Invalid information");
}
});

// Function for checking username And Password

function authentication(username,password,email){
    if(username === "admin" && password === "password@123" && email==="admin@example.com"){
        return true;
    }else{
        return false;
    }
};



