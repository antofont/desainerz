let slideIndex = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7", "mySlides8","mySlides9", "mySlides10", "mySlides11", "mySlides12", "mySlides13", "mySlides14", "mySlides15", "mySlides16", "mySlides17", "mySlides18", "mySlides19", "mySlides20", "mySlides21", "mySlides22"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);
showSlides(1, 9);
showSlides(1, 10);
showSlides(1, 11);
showSlides(1, 12);
showSlides(1, 13);
showSlides(1, 14);
showSlides(1, 15);
showSlides(1, 16);
showSlides(1, 17);
showSlides(1, 18);
showSlides(1, 19);
showSlides(1, 20);
showSlides(1, 21);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

function changeColor(letteraSelezionata){
  elements = document.querySelectorAll('.lettera');
  elementNumber = elements.length;
  for(i=0; i < elementNumber; i++) {
    elements[i].style.color = "#f20574";
    elements[i].style.backgroundColor = "#f3f3f3";
  }
  document.querySelector('#'+letteraSelezionata).style.color= 'white';
  document.querySelector('#'+letteraSelezionata).style.backgroundColor= "#f20574";
}

function openNav() {
  document.getElementById("main").style.marginLeft= "50px";
  document.getElementById("mySidebar").style.width = "55px";
  document.getElementById("main-2").style.marginLeft= "-50px";
  document.getElementById("tuttiContenitori").style.marginRight= "0px";
  document.getElementById("tuttiContenitori").style.marginLeft= "0px";
}

function closeNav() {
  document.getElementById("main-2").style.display= "block";
  document.getElementById("mySidebar").style.width = "0px";
  document.getElementById("main").style.marginLeft= "-50px";
  document.getElementById("main-2").style.marginLeft= "0px";
  document.getElementById("tuttiContenitori").style.marginRight= "30px";
  document.getElementById("tuttiContenitori").style.marginLeft= "-30px";
}


