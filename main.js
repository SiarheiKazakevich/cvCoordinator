const mapblur = document.querySelector('.fotosize');
mapblur.addEventListener('mouseover', toggleBlur);

function toggleBlur() {
   this.classList.toggle('blur');
}