var info = document.querySelector(".info");
var navbar = document.getElementById('navbar');
var sticky = navbar.scrollHeight;
console.log(sticky);
console.log(info);
info.style.marginTop = sticky + 'px';
