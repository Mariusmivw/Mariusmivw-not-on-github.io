function toggle_sidebar() {
	if (document.getElementById("sidebar").style.display == "block") {
		open_sidebar();
		close_sidebar();
	} else {
		close_sidebar();
		open_sidebar();
	}
}

function open_sidebar() {
	document.getElementById("sidebar").style.width = "100%";
	document.getElementById("sidebar").style.display = "block";
}

function close_sidebar() {
	document.getElementById("sidebar").style.display = "none";
}