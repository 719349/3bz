let startLightbox = function() {
	let img = document.getElementById('lightbox');
	let images = [
		'lb3.jpg',
		'lb5.jpg'
	];
	let i = 0;
	let changeImage = function() {
		img.src = '../images/' + images[i];
		i = (i + 1) < images.length ? i + 1 : 0;
	};
	setInterval(changeImage, 5000);
};

window.addEventListener('load', startLightbox);
