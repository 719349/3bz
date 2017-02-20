let order,
retriveOrder = function() {
	order = localStorage.order;
	if (order) {
		return JSON.parse(order);
	} else {
		return {};
	}
},

saveOrder = function(order) {
	localStorage.order = JSON.stringify(order);
},

setUp = function(){
	document.addEventListener('change', function(e) {
		let costElement = e.target.form.getElementsByClassName('cost')[0];
		costElement.innerText = costElement.dataset.cost * e.target.value;
	});

	document.addEventListener('submit', function(e) {
		e.preventDefault();
		let costElement = e.target.getElementsByClassName('cost')[0];
		let productName = costElement.dataset.product;
		let productOrder = Number.parseFloat(costElement.innerText);
		let order = retriveOrder();
		order[productName] = productOrder;
		saveOrder(order);
		getTotalCosts();
	});
	getTotalCosts();
},

getTotalCosts = function() {
	let totalCost = 0;
	let order = retriveOrder();
	for (var product in order) {
		totalCost += order[product];
	}
	document.getElementById('totalCost').innerText = totalCost;
	return totalCost;
};
window.addEventListener('load', setUp);
