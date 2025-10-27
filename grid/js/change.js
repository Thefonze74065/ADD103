//This seems like an inefficient way to do this... There's probably some way to look up elements and avoid hardcoding ids or file paths.
//I'll learn how later.

function swapImage(imgPath, altText) {
	var largeImg = document.getElementById("largeCatImg");
	largeImg.src = imgPath;
	largeImg.alt = altText;
}
