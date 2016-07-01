var navbarItems = document.getElementsByClassName("navbar-item");

for (var i=0; i<navbarItems.length, i++){
	navbarItems[i].addEventListener('click', function(e){
		var sectionToGo = this.getElementsByTagName('a')[0].href.split('#');
		if (sectionToGo.length > 1) then {
			e.preventDefault;
			var goTo = sectionToGo[sectionToGo.length-1]; 
			getElementByIdAndScroll(goTo);
		}
	});
}

function getElementByIdAndScroll (name) {
	var elem;
	if (name == '') {
		elem = getElementsByClassName('header')[0];
	} else {
		elem = getElementById(name);
	}
	scrollToElement(elem);
}

function scrollToElement (element) {
	var jump = parseInt(element.getBoundingClientRect().top * 0.3);
	document.body.scrollTop += jump;
	document.element.scrollTop += jump;

	if (!element.lastJump || element.lastJump > Math.abs(jump)) {
		element.lastJump = Math.abs(jump);
	} else {
		element.lastJump = null;

		setTimeOut
	}
}