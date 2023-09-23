var fullname = document.getElementById("FullName");
var email = document.getElementById("Email");
var phonenumber = document.getElementById("PhoneNumber");
var preference = document.getElementById("Preference");
var cek = document.getElementById("cek");

// var errorFullName = document.getElementById("errorFullName");
// var errorEmail = document.getElementById("errorEmail");
// var errorPhoneNumber = document.getElementById("errorPhoneNumber");
// var errorPreference = document.getElementById("errorPreference");
// var errorCheckbox = document.getElementById("errorCheckbox");

var tanda = false;

function validateName(){
    fullname.value = fullname.value.trim();

    if(fullname.value.length <= 0){
        document.getElementById("errorFullName").style.visibility = "visible";
    }else{
        document.getElementById("errorFullName").style.visibility = "hidden";
        ChangeButton();
    }
}

function validateEmail(){
    email.value = email.value.toLowerCase();
    email.value = email.value.trim();

    if(email.value.endsWith("@gmail.com")==false){
        document.getElementById("errorEmail").style.visibility = "visible";
    }else{
        document.getElementById("errorEmail").style.visibility = "hidden";
        ChangeButton();
    }
}

function validatePhoneNumber(){
    phonenumber.value = phonenumber.value.trim();
    if(phonenumber.value.length != 12){
        document.getElementById("errorPhoneNumber").style.visibility = "visible";
    }else{
        document.getElementById("errorPhoneNumber").style.visibility = "hidden";
        ChangeButton();
    }
}

function validatePreference(){
    preference.value = preference.value.toLowerCase();
    preference.value = preference.value.trim();

    if(preference.value != "skincare" && preference.value !="bodycare"){
        document.getElementById("errorPreference").style.visibility = "visible";
    }else{
        document.getElementById("errorPreference").style.visibility = "hidden";
        ChangeButton();
    }
}

function validateCheckbox(){
    if(cek.checked == true){
        document.getElementById("errorCheckbox").style.visibility = "hidden";
    }
}

function ChangeButton(){
    const btn = document.getElementById("tombol");

    if((fullname.value.length >= 0) && (email.value.endsWith("@gmail.com")==true) && (phonenumber.value.length == 12) && (preference.value =="skincare" || preference.value =="bodycare")){
        if(btn.className == "oldbutton"){
            btn.className = "newbutton";
        }
        tanda = true;
    }
    else{
        if(btn.className == "newbutton"){
            btn.className = "oldbutton";
        }
    }
}

function validate() {
    if(tanda == true){
        if(cek.checked == false){
            document.getElementById("errorCheckbox").style.visibility = "visible";
        }
        else{
            document.getElementById("errorCheckbox").style.visibility = "hidden";
            if((fullname.value.length >= 0) && (email.value.endsWith("@gmail.com")==true) && (phonenumber.value.length == 12) && (Preference.value == "skincare" || preference.value =="bodycare")){
                alert("Subscription Success");
                window.location.reload();
            }
        }
    }
}

document.getElementById("hamburger").addEventListener("click", fungsi);

function fungsi(){
    if(document.getElementById("main").style.display != "inline"){
        document.getElementById("main").style.display = "inline";
        document.getElementById("main").style.left = "0";
        document.getElementById("sec1").style.display = "inline";
        document.getElementById("sec1").style.left = "0";
        document.getElementById("sec2").style.display = "inline";
        document.getElementById("sec2").style.left = "0";
        document.getElementById("sec3").style.display = "inline";
        document.getElementById("sec3").style.left = "0";
        document.getElementById("sec4").style.display = "inline";
        document.getElementById("sec4").style.left = "0";
    }
    else{
        document.getElementById("main").style.display = "none";
        document.getElementById("main").style.left = "-100%";
        document.getElementById("sec1").style.display = "none";
        document.getElementById("sec1").style.left = "-100%";
        document.getElementById("sec2").style.display = "none";
        document.getElementById("sec2").style.left = "-100%";
        document.getElementById("sec3").style.display = "none";
        document.getElementById("sec3").style.left = "-100%";
        document.getElementById("sec4").style.display = "none";
        document.getElementById("sec4").style.left = "-100%";
    }
}




function Pluss(price, a, b) {
    var pricee = parseInt(price);
    console.log(price)
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
    document.getElementById("tes2").innerHTML = value * price;
}

function Minuss(price, a, b) {
    var pricee = parseInt(price);
    console.log(pricee)
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;

        input.value = value;
    }
    document.getElementById("tes2").innerHTML = value * price;
}