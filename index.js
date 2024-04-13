function signUppopUp() {
    
    document.getElementById("create-form-wrapper").style.display = "block";
    setTimeout(function() {
        document.getElementById("create-form-wrapper").style.opacity = 1;
    }, 10); 
}

function closePopup() {
    
    document.getElementById("create-form-wrapper").style.opacity = 0;
    setTimeout(function() {
        document.getElementById("create-form-wrapper").style.display = "none";
    }, 300); 
}

function signInpopUp() {
    
    document.getElementById("sign-in-form-wrapper").style.display = "block";
    setTimeout(function() {
        document.getElementById("sign-in-form-wrapper").style.opacity = 1;
    }, 10); 
}

function closesignInPopup() {
    
    document.getElementById("sign-in-form-wrapper").style.opacity = 0;
    setTimeout(function() {
        document.getElementById("sign-in-form-wrapper").style.display = "none";
    }, 300); 
}
