define(["jquery", "util"], function($, util){
	var products = [];
	$.getJSON("data/products.json", function(data){
		products = data;
	});
	function Product() {
		this.name = util.randomFromArray(products);
	};
	return Product;
});