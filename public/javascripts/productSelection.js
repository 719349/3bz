let setUp = function(){
	document.addEventListener('change', function(e) {
		let costElement = e.target.form.getElementsByClassName('cost')[0];
		costElement.innerText = costElement.dataset.cost * e.target.value;
		getGotalCosts();
	})
},

getGotalCosts = function() {
	let individualCosts = document.getElementsByClassName('cost');
	let totalCost = 0;
	for (var itemIndex in individualCosts) {
		if (individualCosts.hasOwnProperty(itemIndex)) {
			let thisCost = Number.parseFloat(individualCosts[itemIndex].innerText);
			totalCost += thisCost;
		}
	}
	document.getElementById('totalCost').innerText = totalCost;
	return totalCost;
};
window.addEventListener('load', setUp);
