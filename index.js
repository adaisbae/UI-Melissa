
// Event Listeners


// let photos = document.querySelectorAll('.photo-box img');
// Array.from(photos).forEach(photo => photo.addEventListener('click', highlightPhotos));

// function highlightPhotos(){
//     event.target.style.border = 'thick solid @nav-text';
// }


let photos = document.querySelectorAll('.photo-box img');;
Array.from(photos).forEach(photo => photo.addEventListener("mouseenter", function(event) 
{event.target.style.border = "#3D85C6";}));