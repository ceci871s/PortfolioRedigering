/*kilde: https://www.youtube.com/watch?v=At4B7A4GOPg*/
const toggleButton = document.getElementsByClassName('toggle-button')[0] 
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

/*Når man klikker på togglebutton så foldes den ud og derfor når den er "active" så er den foldet ud*/
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active') 
})