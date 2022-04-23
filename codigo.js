/*Window onload*/
document.addEventListener('DOMContentLoaded', function (){
/*Effect scroll*/
//Effect Title
const contentTitle = document.querySelector('.content__title');
const contentText = document.querySelector('.content__text');

const scrollEventTitle = (entradas, observador) => {
	entradas.forEach((entrada) => {
		if (entrada.isIntersecting) {
		contentText.classList.add('title_effect');
		}else{
		contentText.classList.remove('title_effect');
		}	
	});

}
	const observador = new IntersectionObserver(scrollEventTitle, {
		root: null,
		rootMargin: "0px",
		threshold: 0.7
	});

	observador.observe(contentTitle);

//Effect Cards
const cards = document.getElementById('cards');
const cardSection = document.querySelectorAll('.cards__curiosity');

	 const scrollEventCards = (entradas, observer) =>{
		entradas.forEach((entrada) =>{	
		 cardSection.forEach((cardsAll, i) =>{
		 	if (entrada.isIntersecting) {
			//Cards
			cardSection[i].classList.add('cards_effect')	
			}else{
			//cards	
			cardSection[i].classList.remove('cards_effect')
	   	
	   		}
		 });
	  
	  });
    
     }
      const observer = new IntersectionObserver(scrollEventCards, {
		root: null,
		rootMargin: "0px",
		threshold: 0.7
	});
	
	observer.observe(cards);

/*ScrollReveal*/
ScrollReveal().reveal('.content__background', { delay: 300 });
ScrollReveal().reveal('.background__transparent', { delay: 600 });
ScrollReveal().reveal('.benefit', { delay: 500 });
ScrollReveal().reveal('#about', { delay: 500 });
ScrollReveal().reveal('#contact', { delay: 500 });
ScrollReveal().reveal('.footer', { delay: 500 });

});