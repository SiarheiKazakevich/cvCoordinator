const mapblur = document.querySelector('.fotosize');
mapblur.addEventListener('click', toggleBlur);

function toggleBlur() {
   this.classList.toggle('blur');
}