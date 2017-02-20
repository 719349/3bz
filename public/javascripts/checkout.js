let orderList;
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

firstToUpperCase = function(word) {
	return word[0].toUpperCase() + word.slice(1).toLowerCase();
},

showItems = function() {
	let items = retriveOrder();
	let content = '';
	Object.keys(items).forEach(itemName => {
		let line = '<li data-product = ' + itemName + ' >' + firstToUpperCase(itemName) + ' <span class = "cost">' + items[itemName] + '</span></li>';
		content += line;

	});
	orderList.innerHTML = content;
	getTotalCosts();
},

getTotalCosts = function() {
	let totalCost = 0;
	let order = retriveOrder();
	for (var product in order) {
		totalCost += order[product];
	}
	document.getElementById('totalCost').innerText = totalCost;
},

setUp = function() {
	orderList = document.getElementById('orderItems');
	orderList.addEventListener('click', e => {
		let product = e.target.closest('li').dataset.product;
		console.log(product);
		order = retriveOrder();
		delete order[product];
		saveOrder(order);
		showItems();
	});
	showItems();
};

window.addEventListener('load', setUp);
