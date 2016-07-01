var navbarItems = document.getElementsByClassName('navbar-item');

for (var i=0; i<navbarItems.length; i++){
	navbarItems[i].addEventListener('click', function(e){
		var sectionToGo = this.getElementsByTagName('a')[0].href.split('#');
		if (sectionToGo.length > 1) {
			e.preventDefault();
			var goTo = sectionToGo[sectionToGo.length-1]; 
			getElementByIdAndScroll(goTo);
		}
	});
}

function getElementByIdAndScroll (name) {
	var elem;
	if (name == '') {
		elem = document.getElementsByClassName('header')[0];
	} else {
		elem = document.getElementById(name);
	}
	scrollToElement(elem);
}

function scrollToElement (element) {
	var jump = parseInt(element.getBoundingClientRect().top * .2);
	document.body.scrollTop += jump;
	document.documentElement.scrollTop += jump;

	if (!element.lastJump || element.lastJump > Math.abs(jump)) {
		element.lastJump = Math.abs(jump);

		setTimeout(function() {
			scrollToElement(element);
		}, "60");
	} else {
		element.lastJump = null;
	}
}