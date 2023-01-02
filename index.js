var pills = document.querySelectorAll(".pill").length;

document.querySelectorAll('.pill')[0].addEventListener('click',function(){
    var file = window.open("source.html","_target");
    var enter = new Audio("MatrixSound.mp3");
    enter.play();
    setTimeout(function(){
        file.close();
        enter.pause();
    },6000);
});

document.querySelectorAll('.pill')[1].addEventListener('click',function(){
    document.querySelector(".top-container").classList.add('myClass'); 
    document.querySelector("h1").classList.add('myColor'); 
    document.querySelector("h2").classList.add('myColor'); 
    document.querySelector(".top-cloud").classList.add('top-cloud-motion');
    document.querySelector(".bottom-cloud").classList.add('bottom-cloud-motion');
    setTimeout(function(){
        document.querySelector(".top-container").classList.remove('myClass'); 
        document.querySelector("h1").classList.remove('myColor'); 
        document.querySelector("h2").classList.remove('myColor'); 
        
    },6000)
});




