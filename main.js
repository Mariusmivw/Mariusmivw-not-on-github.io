function toggle_sidebar() {
	if (document.getElementById("sidebar").style.display == "block") {
		close_sidebar();
	} else {
		open_sidebar();
	}
}

function open_sidebar() {
	document.getElementById("sidebar").classList.add("w3-animate-left");
	document.getElementById("sidebar").style.width = "100%";
	document.getElementById("sidebar").style.display = "block";
}

function close_sidebar() {
	document.getElementById("sidebar").classList.remove("w3-animate-left");
	document.getElementById("sidebar").classList.add("w3-animate-out-left");

	reloadNode(document.getElementById("sidebar"));

	onAnimationEnd(
		() => {
			document.getElementById("sidebar").style.display = "none";
			document.getElementById("sidebar").classList.remove("w3-animate-out-left");
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
		document.getElementById("sidebar").removeEventListener(animationEvent, func);
	}
	animationEvent && document.getElementById("sidebar").addEventListener(animationEvent, func);
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