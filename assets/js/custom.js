$(document).ready(function(){
	"use strict";
    
        /*==================================
* Author        : "ThemeSine"
* Template Name : Listrace directory HTML Template
* Version       : 1.0
==================================== */




/*=========== TABLE OF CONTENTS ===========
1. Scroll To Top 
2. slick carousel
3. welcome animation support
4. feather icon
5. counter
======================================*/

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
	
	
	// 2. slick carousel

	    $(".testimonial-carousel").slick({
	        infinite: true,
	        centerMode: true,
	        autoplay:true,
	        slidesToShow: 5,
	        slidesToScroll: 3,
	        autoplaySpeed:1500,
	        // the magic
			responsive: [
				{

					breakpoint:1440,
					settings: {
					slidesToShow:3
					}

				},
				{

					breakpoint: 1024,
					settings: {
					slidesToShow:2,
					
					}

				}, 
				{

					breakpoint:991,
					settings: {
					slidesToShow:2,
					centerMode:false,
					}

				},
				{

					breakpoint:767,
					settings: {
					slidesToShow:1,
					}

				}
			]
	    });



    // 3. welcome animation support

        $(window).load(function(){
        	$(".welcome-hero-txt h2,.welcome-hero-txt p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".welcome-hero-serch-box").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".welcome-hero-txt h2,.welcome-hero-txt p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".welcome-hero-serch-box").addClass("animated fadeInDown").css({'opacity':'0'});
        });

	// 4. feather icon

		feather.replace();

	// 5. counter
		$(window).on('load', function(){	
			$('.counter').counterUp({
				delay: 10,
				time: 3000
			});	
		});

});

document.querySelector(".button1").addEventListener("click", function() {
	const hiddenElements = document.querySelectorAll(".hidden1");
	
	hiddenElements.forEach(function(element, index) {
	  // Verifica se o elemento está visível ou oculto
	  if (element.hidden) {
		// Mostrar o elemento
		element.hidden = false;
		element.style.display = "block";
		element.style.opacity = "0";
		element.style.transition = "opacity 0.5s ease";
		
		// Suaviza a aparição dos elementos com um delay
		setTimeout(function() {
		  element.style.opacity = "1";
		}, index * 300);
		
		// Rola suavemente até o elemento
		element.scrollIntoView({ behavior: "smooth", block: "start" });
	  } else {
		// Esconder o elemento com uma transição suave
		element.style.opacity = "0";
		
		// Depois de ocultar, remover o display após a transição
		setTimeout(function() {
		  element.style.display = "none";
		  element.hidden = true;
		}, 500); // Tempo de transição correspondente ao tempo do fade-out
	  }
	});
	
	// Alternar o texto do botão entre "Mostrar Conteúdo" e "Esconder Conteúdo"
	const button = document.querySelector(".button1");
	button.textContent = button.textContent === "Ver mais serviços" ? "Esconder serviços" : "Ver mais serviços";
  });




  document.querySelector(".button2").addEventListener("click", function() {
	const hiddenElements = document.querySelectorAll(".hidden2");
	
	hiddenElements.forEach(function(element, index) {
	  // Verifica se o elemento está visível ou oculto
	  if (element.hidden) {
		// Mostrar o elemento
		element.hidden = false;
		element.style.display = "block";
		element.style.opacity = "0";
		element.style.transition = "opacity 0.5s ease";
		
		// Suaviza a aparição dos elementos com um delay
		setTimeout(function() {
		  element.style.opacity = "1";
		}, index * 300);
		
		// Rola suavemente até o elemento
		element.scrollIntoView({ behavior: "smooth", block: "start" });
	  } else {
		// Esconder o elemento com uma transição suave
		element.style.opacity = "0";
		
		// Depois de ocultar, remover o display após a transição
		setTimeout(function() {
		  element.style.display = "none";
		  element.hidden = true;
		}, 500); // Tempo de transição correspondente ao tempo do fade-out
	  }
	});
	
	// Alternar o texto do botão entre "Mostrar Conteúdo" e "Esconder Conteúdo"
	const button = document.querySelector(".button2");
	button.textContent = button.textContent === "Ver mais serviços" ? "Esconder serviços" : "Ver mais serviços";
  });

  document.querySelector(".button3").addEventListener("click", function() {
	const hiddenElements = document.querySelectorAll(".hidden3");
	
	hiddenElements.forEach(function(element, index) {
	  // Verifica se o elemento está visível ou oculto
	  if (element.hidden) {
		// Mostrar o elemento
		element.hidden = false;
		element.style.display = "block";
		element.style.opacity = "0";
		element.style.transition = "opacity 0.5s ease";
		
		// Suaviza a aparição dos elementos com um delay
		setTimeout(function() {
		  element.style.opacity = "1";
		}, index * 300);
		
		// Rola suavemente até o elemento
		element.scrollIntoView({ behavior: "smooth", block: "start" });
	  } else {
		// Esconder o elemento com uma transição suave
		element.style.opacity = "0";
		
		// Depois de ocultar, remover o display após a transição
		setTimeout(function() {
		  element.style.display = "none";
		  element.hidden = true;
		}, 500); // Tempo de transição correspondente ao tempo do fade-out
	  }
	});
	
	// Alternar o texto do botão entre "Mostrar Conteúdo" e "Esconder Conteúdo"
	const button = document.querySelector(".button3");
	button.textContent = button.textContent === "Ver mais serviços" ? "Esconder serviços" : "Ver mais serviços";
  });


