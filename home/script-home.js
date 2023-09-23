// var main = document.getElementsByClassName("main");
// var sec = document.getElementsByClassName("sec");

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