function toggle_sidebar() {
	if (document.getElementById("permanent-sidebar").style.display == "block") {
		close_sidebar();
	} else {
		open_sidebar();
	}
}

function open_sidebar() {
	document.getElementById("permanent-sidebar").classList.add("w3-animate-left");
	document.getElementById("permanent-sidebar").style.width = "100%";
	document.getElementById("permanent-sidebar").style.display = "block";
}

function close_sidebar() {
	document.getElementById("permanent-sidebar").classList.remove("w3-animate-left");
	document.getElementById("permanent-sidebar").classList.add("w3-animate-out-left");

	reloadNode(document.getElementById("permanent-sidebar"));

	onAnimationEnd(
		() => {
			document.getElementById("permanent-sidebar").style.display = "none";
			document.getElementById("permanent-sidebar").classList.remove("w3-animate-out-left");
		}
	);

}




function reloadNode(el) {
	var newone = el.cloneNode(true);
	el.parentNode.replaceChild(newone, el);
}


function onAnimationEnd(fn) {
	var animationEvent = whichAnimationEvent();
	function func() {
		fn();
		document.getElementById("permanent-sidebar").removeEventListener(animationEvent, func);
	}
	animationEvent && document.getElementById("permanent-sidebar").addEventListener(animationEvent, func);
}

function whichAnimationEvent() {
	var t;
	var el = document.createElement('fakeelement');
	var animations = {
		'animation': 'animationend',
		'OAnimation': 'oAnimationEnd',
		'MozAnimation': 'animationend',
		'WebkitAnimation': 'webkitAnimationEnd'
	}

	for (t in animations) {
		if (el.style[t] !== undefined) {
			return animations[t];
		}
	}
}