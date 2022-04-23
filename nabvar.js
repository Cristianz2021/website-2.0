/*Nabvar effect*/
const nav_button = document.querySelector('.icono');
const main = document.querySelector('.main');

nav_button.addEventListener('click', () =>{
	main.classList.toggle('show');
});