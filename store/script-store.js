var ganti = document.getElementById('ganti');

ganti.onchange = function() {
    var nilai = this.options[this.selectedIndex];
    location.assign(nilai.value);
}

document.getElementById("hamburger").addEventListener("click", fungsi);

function fungsi() {
    if (document.getElementById("main").style.display != "inline") {
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
    } else {
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

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
let value1temp;
var value2temp;

function Minuss(price, a, b) {
    var pricee = parseInt(price);
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        // value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
         document.getElementById("tes2").innerHTML = value * price;
    }
    console.log("ini value minus" ,value);

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
    console.log("ini value plus" ,value);
    // console.log(total);
}


function Pluss1(price, a, b) {
    var pricee = parseInt(price);
    console.log(price)
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
    let total = document.getElementById("tes123").innerHTML = value * pricee;
    console.log(total);
}

function Minuss1(price, a, b) {
    var pricee = parseInt(price);
    console.log(pricee)
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;

        input.value = value;
    }
    let total = document.getElementById("tes123").innerHTML = value * price;

    console.log(total);

}

function Pluss3(price, a, b) {
    var pricee = parseInt(price);
    console.log(price)
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
    let total = document.getElementById("subforbodyfacial").innerHTML = value * pricee;
    console.log(total);
}

function Minuss3(price, a, b) {
    var pricee = parseInt(price);
    console.log(pricee)
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;

        input.value = value;
    }
    let total = document.getElementById("subforbodyfacial").innerHTML = value * price;

    console.log(total);

}

function Pluss4(price, a, b) {
    var pricee = parseInt(price);
    console.log(price)
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
    let total = document.getElementById("subforbodymoisturizer").innerHTML = value * pricee;
    console.log(total);
}

function Minuss4(price, a, b) {
    var pricee = parseInt(price);
    console.log(pricee)
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;

        input.value = value;
    }
    let total = document.getElementById("subforbodymoisturizer").innerHTML = value * price;

    console.log(total);

}

function Pluss5(price, a, b) {
    var pricee = parseInt(price);
    console.log(price)
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
    let total = document.getElementById("subforbodyoil").innerHTML = value * pricee;
    console.log(total);
}

function Minuss5(price, a, b) {
    var pricee = parseInt(price);
    console.log(pricee)
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;

        input.value = value;
    }
    let total = document.getElementById("subforbodyoil").innerHTML = value * price;

    console.log(total);

}

function Pluss6(price, a, b) {
    var pricee = parseInt(price);
    console.log(price)
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
    let total = document.getElementById("subforbodyserum").innerHTML = value * pricee;
    console.log(total);
}

function Minuss6(price, a, b) {
    var pricee = parseInt(price);
    console.log(pricee)
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;

        input.value = value;
    }
    let total = document.getElementById("subforbodyserum").innerHTML = value * price;

    console.log(total);

}

function Pluss7(price, a, b) {
    var pricee = parseInt(price);
    console.log(price)
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
    let total = document.getElementById("subforfacialcleanserr").innerHTML = value * pricee;
    console.log(total);
}

function Minuss7(price, a, b) {
    var pricee = parseInt(price);
    console.log(pricee)
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;

        input.value = value;
    }
    let total = document.getElementById("subforfacialcleanserr").innerHTML = value * price;

    console.log(total);

}

function Pluss8(price, a, b) {
    var pricee = parseInt(price);
    console.log(price)
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
    let total = document.getElementById("subforfacialwash").innerHTML = value * pricee;
    console.log(total);
}

function Minuss8(price, a, b) {
    var pricee = parseInt(price);
    console.log(pricee)
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;

        input.value = value;
    }
    let total = document.getElementById("subforfacialwash").innerHTML = value * price;

    console.log(total);

}

function myFunctionalert() {
    alert("order successful")
    document.location.reload(true)
}