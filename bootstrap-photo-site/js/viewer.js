function initViewer(thumbsSelector, mainImgSelector, instructionSelector) {
	const thumbs = document.querySelectorAll(thumbsSelector);
	const main = document.querySelector(mainImgSelector);
	const instruct = document.querySelector(instructionSelector);
	if (!thumbs.length || !main) return;
	thumbs.forEach((t) => {
		t.addEventListener("click", function () {
			const src = this.dataset.src || this.src;
			const text = this.dataset.text || this.getAttribute("data-text") || "";
			main.src = src;
			if (instruct) instruct.textContent = text;
		});
	});
}

window.initViewer = initViewer;
