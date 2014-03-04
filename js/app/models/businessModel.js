define(["jquery", "models/productModel"], function($, Product){
	function Business(string, baseModel){
		this.baseModel = baseModel;
		this.name = string;
		this.isBankrupt = false,
		this.isPublic = false,
		this.products = [],
		this.offices = [];
		this.addProduct();
	};
	Business.prototype = {
		addProduct: function(product){
			var prod = product || new Product();
			this.products.push(prod);
			this.baseModel.updateView();
		},
		float: function(){
			this.isPublic = true;
			this.baseModel.updateView();
		},
		bankrupt: function(){
			this.isBankrupt = true;
			this.baseModel.updateView();
		},
		merge: function(business){
			for (var i=0;i<business.products.length;i++){
				this.products.push(business.products[i]);
			};
			for (var i=0;i<business.offices.length;i++){
				this.offices.push(business.offices[i]);
			};
			this.name += " - " + business.name.toString();
			var ind = this.baseModel.businesses.indexOf(business);
			this.baseModel.businesses.splice(ind, 1);
			this.baseModel.updateView();
		}
	};
	return Business;
});
