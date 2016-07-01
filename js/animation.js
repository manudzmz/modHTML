var imagen = document.getElementById('title-img-animated');

imagen.addEventListener('mousemove', function(e){
	imagen.style.backgroundPosition = e.pageX * -1/12 + "px " + e.pageY * -1/12 + "px";
});

imagen.addEventListener('mouseleave', function(e){
	imagen.style.backgroundPosition = "center center";
});