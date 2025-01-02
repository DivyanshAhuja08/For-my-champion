const container1 = document.querySelector(".button1");
const container2 = document.querySelector(".button2");

container1.addEventListener("mouseover", function() {
    document.querySelector(".container1").style.display = "none";
    document.querySelector(".container2").style.display = "flex";
    document.querySelector("body").style.backgroundImage = "url('background body cutiee.webp')";
});

container2.addEventListener("mouseout", function() {
    document.querySelector(".container1").style.display = "flex";
    document.querySelector(".container2").style.display = "none";
    document.querySelector("body").style.backgroundImage = "url('background body.webp')";
});
